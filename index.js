var server = require ("./server");
var router = require ("./router");
var requestHandlers = require ("./requestHandler");

var handle = {}
    handle["/"] = requestHandlers.fail;
    handle["/start"] = requestHandlers.start;
    handle["/upload"] = requestHandlers.upload;

server.start(router.route,handle);