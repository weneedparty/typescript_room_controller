// GENERATED CODE -- DO NOT EDIT!

// package: room_control_service
// file: room_control_service.proto

import * as room_control_service_pb from "./room_control_service_pb";
import * as grpc from "@grpc/grpc-js";

interface IRoomControlServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<room_control_service_pb.HelloRequest, room_control_service_pb.HelloReply>;
}

export const RoomControlServiceService: IRoomControlServiceService;

export interface IRoomControlServiceServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<room_control_service_pb.HelloRequest, room_control_service_pb.HelloReply>;
}

export class RoomControlServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: room_control_service_pb.HelloRequest, callback: grpc.requestCallback<room_control_service_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: room_control_service_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: room_control_service_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<room_control_service_pb.HelloReply>): grpc.ClientUnaryCall;
}
