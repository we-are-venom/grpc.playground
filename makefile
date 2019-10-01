all: build run
generate:
	protoc --gogofaster_out=plugins=grpc,import_path=main:. service.proto
	protoc -I=. service.proto --js_out=import_style=commonjs:./src --grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src

build: build-server build-proxy

build-server:
	cd server && go build -o ../book-server && cd ..

build-proxy:
	cd proxy && docker build -t wearevenom/envoy-proxy -f ./envoy.Dockerfile . && cd ..

run: run-server run-proxy

run-server:
	./book-server

run-proxy:
	docker run -p 8080:8080 wearevenom/envoy-proxy

run-client:
	cd client && npm run start && cd ..