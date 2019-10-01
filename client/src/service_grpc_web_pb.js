 /* eslint-disable */
 /**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./service_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BookServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.BookServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetBookRequest,
 *   !proto.Book>}
 */
const methodDescriptor_BookService_GetBook = new grpc.web.MethodDescriptor(
  '/BookService/GetBook',
  grpc.web.MethodType.UNARY,
  proto.GetBookRequest,
  proto.Book,
  /** @param {!proto.GetBookRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Book.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetBookRequest,
 *   !proto.Book>}
 */
const methodInfo_BookService_GetBook = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Book,
  /** @param {!proto.GetBookRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Book.deserializeBinary
);


/**
 * @param {!proto.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Book)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Book>|undefined}
 *     The XHR Node Readable Stream
 */
proto.BookServiceClient.prototype.getBook =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/BookService/GetBook',
      request,
      metadata || {},
      methodDescriptor_BookService_GetBook,
      callback);
};


/**
 * @param {!proto.GetBookRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Book>}
 *     A native promise that resolves to the response
 */
proto.BookServicePromiseClient.prototype.getBook =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/BookService/GetBook',
      request,
      metadata || {},
      methodDescriptor_BookService_GetBook);
};


module.exports = proto;

