import * as grpc from "@grpc/grpc-js";

import * as room_control_service_grpc_pb from './generated_grpc/room_control_service_grpc_pb';
import * as room_control_service_pb from './generated_grpc/room_control_service_pb';


const MyRoomControlService: room_control_service_grpc_pb.IRoomControlServiceServer = {
    sayHello: function (call: grpc.ServerUnaryCall<room_control_service_pb.HelloRequest, room_control_service_pb.HelloReply>, callback: grpc.sendUnaryData<room_control_service_pb.HelloReply>): void {
        const reply = new room_control_service_pb.HelloReply();
        reply.setMessage('Hello ' + call.request.getName());
        callback(null, reply);
    }
}

export const run = () => {
    const server = new grpc.Server();

    server.addService(room_control_service_grpc_pb.RoomControlServiceService, MyRoomControlService);
    server.bindAsync("127.0.0.1:40054", grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) throw err;

        console.log(`\nServer started, listening on port ${port}`);
        server.start();
    });
}

export default run;