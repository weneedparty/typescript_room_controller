// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var room_control_service_pb = require('./room_control_service_pb.js');

function serialize_room_control_service_AllowJoinRequest(arg) {
  if (!(arg instanceof room_control_service_pb.AllowJoinRequest)) {
    throw new Error('Expected argument of type room_control_service.AllowJoinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_AllowJoinRequest(buffer_arg) {
  return room_control_service_pb.AllowJoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_AllowJoinResponse(arg) {
  if (!(arg instanceof room_control_service_pb.AllowJoinResponse)) {
    throw new Error('Expected argument of type room_control_service.AllowJoinResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_AllowJoinResponse(buffer_arg) {
  return room_control_service_pb.AllowJoinResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_CreateRoomRequest(arg) {
  if (!(arg instanceof room_control_service_pb.CreateRoomRequest)) {
    throw new Error('Expected argument of type room_control_service.CreateRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_CreateRoomRequest(buffer_arg) {
  return room_control_service_pb.CreateRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_CreateRoomResponse(arg) {
  if (!(arg instanceof room_control_service_pb.CreateRoomResponse)) {
    throw new Error('Expected argument of type room_control_service.CreateRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_CreateRoomResponse(buffer_arg) {
  return room_control_service_pb.CreateRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_DeleteRoomRequest(arg) {
  if (!(arg instanceof room_control_service_pb.DeleteRoomRequest)) {
    throw new Error('Expected argument of type room_control_service.DeleteRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_DeleteRoomRequest(buffer_arg) {
  return room_control_service_pb.DeleteRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_DeleteRoomResponse(arg) {
  if (!(arg instanceof room_control_service_pb.DeleteRoomResponse)) {
    throw new Error('Expected argument of type room_control_service.DeleteRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_DeleteRoomResponse(buffer_arg) {
  return room_control_service_pb.DeleteRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_room_control_service_ListRoomsRequest(arg) {
  if (!(arg instanceof room_control_service_pb.ListRoomsRequest)) {
    throw new Error('Expected argument of type room_control_service.ListRoomsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_ListRoomsRequest(buffer_arg) {
  return room_control_service_pb.ListRoomsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_room_control_service_ListRoomsResponse(arg) {
  if (!(arg instanceof room_control_service_pb.ListRoomsResponse)) {
    throw new Error('Expected argument of type room_control_service.ListRoomsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_room_control_service_ListRoomsResponse(buffer_arg) {
  return room_control_service_pb.ListRoomsResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  createRoom: {
    path: '/room_control_service.RoomControlService/CreateRoom',
    requestStream: false,
    responseStream: false,
    requestType: room_control_service_pb.CreateRoomRequest,
    responseType: room_control_service_pb.CreateRoomResponse,
    requestSerialize: serialize_room_control_service_CreateRoomRequest,
    requestDeserialize: deserialize_room_control_service_CreateRoomRequest,
    responseSerialize: serialize_room_control_service_CreateRoomResponse,
    responseDeserialize: deserialize_room_control_service_CreateRoomResponse,
  },
  allowJoin: {
    path: '/room_control_service.RoomControlService/AllowJoin',
    requestStream: false,
    responseStream: false,
    requestType: room_control_service_pb.AllowJoinRequest,
    responseType: room_control_service_pb.AllowJoinResponse,
    requestSerialize: serialize_room_control_service_AllowJoinRequest,
    requestDeserialize: deserialize_room_control_service_AllowJoinRequest,
    responseSerialize: serialize_room_control_service_AllowJoinResponse,
    responseDeserialize: deserialize_room_control_service_AllowJoinResponse,
  },
  listRooms: {
    path: '/room_control_service.RoomControlService/ListRooms',
    requestStream: false,
    responseStream: false,
    requestType: room_control_service_pb.ListRoomsRequest,
    responseType: room_control_service_pb.ListRoomsResponse,
    requestSerialize: serialize_room_control_service_ListRoomsRequest,
    requestDeserialize: deserialize_room_control_service_ListRoomsRequest,
    responseSerialize: serialize_room_control_service_ListRoomsResponse,
    responseDeserialize: deserialize_room_control_service_ListRoomsResponse,
  },
  deleteRoom: {
    path: '/room_control_service.RoomControlService/DeleteRoom',
    requestStream: false,
    responseStream: false,
    requestType: room_control_service_pb.DeleteRoomRequest,
    responseType: room_control_service_pb.DeleteRoomResponse,
    requestSerialize: serialize_room_control_service_DeleteRoomRequest,
    requestDeserialize: deserialize_room_control_service_DeleteRoomRequest,
    responseSerialize: serialize_room_control_service_DeleteRoomResponse,
    responseDeserialize: deserialize_room_control_service_DeleteRoomResponse,
  },
};

exports.RoomControlServiceClient = grpc.makeGenericClientConstructor(RoomControlServiceService);
