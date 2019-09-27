package main

import (
	context "context"
	"log"
	"net"

	"google.golang.org/grpc"
)

type Server struct{}

func (s *Server) GetBook(context.Context, *GetBookRequest) (*Book, error) {
	return &Book{
		Isbn:   234567,
		Title:  "A book",
		Author: "Me",
		Status: Status_RUNNING,
	}, nil
}

func main() {
	lis, err := net.Listen("tcp", ":50052")
	if err != nil {
		log.Fatalf("failed to listen: %v", err)
	}

	s := grpc.NewServer()
	RegisterBookServiceServer(s, &Server{})
	println("Starting server")
	if err := s.Serve(lis); err != nil {
		log.Fatalf("failed to serve: %v", err)
	}
}
