# typescript_room_controller
Here we are going to use typescript to controller the livekit rooms.

## set up `livekit` docker container
```bash
docker run --rm -v$PWD:/output livekit/generate --local

docker run -d -p 7880:7880 \
    --name livekitService \
    -p 7881:7881 \
    -p 7882:7882/udp \
    -v $PWD/livekit.yaml:/livekit.yaml \
    livekit/livekit-server \
    --config /livekit.yaml \
    --node-ip 192.168.50.189
```

## run
```
yarn dev
```

## Build
```bash
docker buildx build --platform linux/amd64 --tag weloveparty_roommanageservice .

docker run --rm --platform linux/amd64 --name weloveparty_roommanageservice \
--mount type=bind,source="$(pwd)"/livekit.yaml,target=/code/livekit.yaml \
weloveparty_roommanageservice
```