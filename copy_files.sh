rm -Rf dist
mkdir -p dist
cp livekit.yaml dist/
# cp ../party_protocals/protocols/room_control_service.proto dist/
cp -R src/generated_grpc dist/