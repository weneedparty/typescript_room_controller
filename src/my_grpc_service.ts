import * as grpc from "@grpc/grpc-js";

import * as room_control_service_grpc_pb from './generated_grpc/room_control_service_grpc_pb';
import * as room_control_service_pb from './generated_grpc/room_control_service_pb';

import { AccessToken, RoomServiceClient, Room } from 'livekit-server-sdk';

import { apiKeyAndValueObject } from './store';

const theLiveKitControlPort = '7880';
let livekitHost = `http://0.0.0.0:${theLiveKitControlPort}`;
if (process?.env?.livekit_NETWORK_NAME) {
    livekitHost = `http://${process.env.livekit_NETWORK_NAME}:${theLiveKitControlPort}`;
}
console.log(livekitHost)
const svc = new RoomServiceClient(livekitHost, apiKeyAndValueObject.apiKey, apiKeyAndValueObject.apiValue);

const MyRoomControlService: room_control_service_grpc_pb.IRoomControlServiceServer = {
    sayHello: function (call: grpc.ServerUnaryCall<room_control_service_pb.HelloRequest, room_control_service_pb.HelloReply>,
        callback: grpc.sendUnaryData<room_control_service_pb.HelloReply>): void {
        const reply = new room_control_service_pb.HelloReply();
        reply.setMessage('Hello ' + call.request.getName());
        callback(null, reply);
    },

    createRoom: function (call: grpc.ServerUnaryCall<room_control_service_pb.CreateRoomRequest, room_control_service_pb.CreateRoomResponse>, callback: grpc.sendUnaryData<room_control_service_pb.CreateRoomResponse>): void {
        const response = new room_control_service_pb.CreateRoomResponse();

        console.log(call.request);

        svc.createRoom({
            name: call.request.getRoomname(),
            emptyTimeout: 60,
            maxParticipants: 5
        }).then((room: Room) => {
            console.log(`room created: ${room.name}`);
            response.setSuccess(true);
        }).catch((err: Error) => {
            console.log(`room create got error: ${err}`);
            response.setSuccess(false);
        }).finally(() => {
            callback(null, response);
        });
    },
    allowJoin: function (call: grpc.ServerUnaryCall<room_control_service_pb.AllowJoinRequest, room_control_service_pb.AllowJoinResponse>, callback: grpc.sendUnaryData<room_control_service_pb.AllowJoinResponse>): void {
        const response = new room_control_service_pb.AllowJoinResponse();

        console.log(call.request);

        try {
            const at = new AccessToken(apiKeyAndValueObject.apiKey, apiKeyAndValueObject.apiValue, {
                identity: call.request.getIdentity(),
                // name: call.request.getIdentity()
            });
            at.addGrant({ roomJoin: true, room: call.request.getRoomname(), canPublish: true, canSubscribe: true });
            response.setAccesstoken(at.toJwt());
        } catch (err) {
            console.log(err);
            response.setAccesstoken('');
        } finally {
            callback(null, response);
        }
    },
    listRooms: function (call: grpc.ServerUnaryCall<room_control_service_pb.ListRoomsRequest, room_control_service_pb.ListRoomsResponse>, callback: grpc.sendUnaryData<room_control_service_pb.ListRoomsResponse>): void {
        const response = new room_control_service_pb.ListRoomsResponse();

        console.log(call.request);

        svc.listRooms().then((rooms: Room[]) => {
            // console.log(rooms);
            response.setRoomsList(rooms.map((room: Room) => {
                const roomInfo = new room_control_service_pb.RoomInfo();
                roomInfo.setRoomname(room.name);
                roomInfo.setNumberofparticipants(room.numParticipants);
                return roomInfo;
            }));
        }).finally(() => {
            callback(null, response);
        });
    },
    deleteRoom: function (call: grpc.ServerUnaryCall<room_control_service_pb.DeleteRoomRequest, room_control_service_pb.DeleteRoomResponse>, callback: grpc.sendUnaryData<room_control_service_pb.DeleteRoomResponse>): void {
        const response = new room_control_service_pb.DeleteRoomResponse();

        console.log(call.request);

        svc.deleteRoom(call.request.getRoomname()).then(() => {
            console.log(`room deleted: ${call.request.getRoomname()}`);
            response.setSuccess(true);
        }).catch((err: Error) => {
            console.log(`room delete got error: ${err}`);
            response.setSuccess(false);
        }).finally(() => {
            callback(null, response);
        });
    }
}

export const run = () => {
    const server = new grpc.Server();

    server.addService(room_control_service_grpc_pb.RoomControlServiceService, MyRoomControlService);
    server.bindAsync("0.0.0.0:40053", grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) throw err;

        console.log(`\nServer started, listening on port ${port}`);
        server.start();
    });
}

export default run;