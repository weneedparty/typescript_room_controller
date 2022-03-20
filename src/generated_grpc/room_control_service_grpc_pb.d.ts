// GENERATED CODE -- DO NOT EDIT!

// package: room_control_service
// file: room_control_service.proto

import * as room_control_service_pb from "./room_control_service_pb";
import * as grpc from "@grpc/grpc-js";

interface IRoomControlServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<room_control_service_pb.HelloRequest, room_control_service_pb.HelloReply>;
  createRoom: grpc.MethodDefinition<room_control_service_pb.CreateRoomRequest, room_control_service_pb.CreateRoomResponse>;
  allowJoin: grpc.MethodDefinition<room_control_service_pb.AllowJoinRequest, room_control_service_pb.AllowJoinResponse>;
  listRooms: grpc.MethodDefinition<room_control_service_pb.ListRoomsRequest, room_control_service_pb.ListRoomsResponse>;
  deleteRoom: grpc.MethodDefinition<room_control_service_pb.DeleteRoomRequest, room_control_service_pb.DeleteRoomResponse>;
}

export const RoomControlServiceService: IRoomControlServiceService;

export interface IRoomControlServiceServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<room_control_service_pb.HelloRequest, room_control_service_pb.HelloReply>;
  createRoom: grpc.handleUnaryCall<room_control_service_pb.CreateRoomRequest, room_control_service_pb.CreateRoomResponse>;
  allowJoin: grpc.handleUnaryCall<room_control_service_pb.AllowJoinRequest, room_control_service_pb.AllowJoinResponse>;
  listRooms: grpc.handleUnaryCall<room_control_service_pb.ListRoomsRequest, room_control_service_pb.ListRoomsResponse>;
  deleteRoom: grpc.handleUnaryCall<room_control_service_pb.DeleteRoomRequest, room_control_service_pb.DeleteRoomResponse>;
}

export class RoomControlServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: room_control_service_pb.HelloRequest, callback: grpc.requestCallback<room_control_service_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: room_control_service_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: room_control_service_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.HelloReply>): grpc.ClientUnaryCall;
  createRoom(argument: room_control_service_pb.CreateRoomRequest, callback: grpc.requestCallback<room_control_service_pb.CreateRoomResponse>): grpc.ClientUnaryCall;
  createRoom(argument: room_control_service_pb.CreateRoomRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.CreateRoomResponse>): grpc.ClientUnaryCall;
  createRoom(argument: room_control_service_pb.CreateRoomRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.CreateRoomResponse>): grpc.ClientUnaryCall;
  allowJoin(argument: room_control_service_pb.AllowJoinRequest, callback: grpc.requestCallback<room_control_service_pb.AllowJoinResponse>): grpc.ClientUnaryCall;
  allowJoin(argument: room_control_service_pb.AllowJoinRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.AllowJoinResponse>): grpc.ClientUnaryCall;
  allowJoin(argument: room_control_service_pb.AllowJoinRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.AllowJoinResponse>): grpc.ClientUnaryCall;
  listRooms(argument: room_control_service_pb.ListRoomsRequest, callback: grpc.requestCallback<room_control_service_pb.ListRoomsResponse>): grpc.ClientUnaryCall;
  listRooms(argument: room_control_service_pb.ListRoomsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.ListRoomsResponse>): grpc.ClientUnaryCall;
  listRooms(argument: room_control_service_pb.ListRoomsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.ListRoomsResponse>): grpc.ClientUnaryCall;
  deleteRoom(argument: room_control_service_pb.DeleteRoomRequest, callback: grpc.requestCallback<room_control_service_pb.DeleteRoomResponse>): grpc.ClientUnaryCall;
  deleteRoom(argument: room_control_service_pb.DeleteRoomRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.DeleteRoomResponse>): grpc.ClientUnaryCall;
  deleteRoom(argument: room_control_service_pb.DeleteRoomRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.DeleteRoomResponse>): grpc.ClientUnaryCall;
}
