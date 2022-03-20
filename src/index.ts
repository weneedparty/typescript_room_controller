
import { run } from './my_grpc_service';

run()


// import { RoomServiceClient, Room } from 'livekit-server-sdk';
// const livekitHost = 'https://my.livekit.host';
// const svc = new RoomServiceClient(livekitHost, 'api-key', 'secret-key');

// // list rooms
// svc.listRooms().then((rooms: Room[]) => {
//     console.log('existing rooms', rooms);
// });

// // create a new room
// const opts = {
//     name: 'myroom',
//     // timeout in seconds
//     emptyTimeout: 10 * 60,
//     maxParticipants: 20
// }
// svc.createRoom(opts).then((room: Room) => {
//     console.log('room created', room)
// })

// // delete a room
// svc.deleteRoom('myroom').then(() => {
//     console.log('room deleted')
// })



// import { AccessToken } from 'livekit-server-sdk';

// // if this room doesn't exist, it'll be automatically created when the first
// // client joins
// const roomName = 'name-of-room';
// // identifier to be used for participant.
// // it's available as LocalParticipant.identity with livekit-client SDK
// const participantName = 'user-name';

// const at = new AccessToken('api-key', 'secret-key', {
//     identity: participantName,
// });
// at.addGrant({ roomJoin: true, room: roomName });

// const token = at.toJwt();

// console.log('access token', token);