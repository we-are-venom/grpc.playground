all: build run
generate:
	protoc --gogofaster_out=plugins=grpc,import_path=main:. service.proto

build:
	go build -o server

run:
	./server

