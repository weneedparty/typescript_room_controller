// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var room_control_service_pb = require('./room_control_service_pb.js');

function serialize_room_control_service_HelloReply(arg) {
  if (!(arg instanceof room_control_service_pb.HelloReply)) {
    throw new Error('Expected argument of type room_control_service.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_HelloReply(buffer_arg) {
  return room_control_service_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_HelloRequest(arg) {
  if (!(arg instanceof room_control_service_pb.HelloRequest)) {
    throw new Error('Expected argument of type room_control_service.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_HelloRequest(buffer_arg) {
  return room_control_service_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RoomControlServiceService = exports.RoomControlServiceService = {
  sayHello: {
    path: '/room_control_service.RoomControlService/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: room_control_service_pb.HelloRequest,
    responseType: room_control_service_pb.HelloReply,
    requestSerialize: serialize_room_control_service_HelloRequest,
    requestDeserialize: deserialize_room_control_service_HelloRequest,
    responseSerialize: serialize_room_control_service_HelloReply,
    responseDeserialize: deserialize_room_control_service_HelloReply,
  },
};

exports.RoomControlServiceClient = grpc.makeGenericClientConstructor(RoomControlServiceService);
