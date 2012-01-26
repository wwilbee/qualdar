var http = require("http");

http.createServer(function(request, response) {
    console.log ("request received");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello Cloud City\n");
    response.end();
    console.log ("request processed");
}).listen(process.env.PORT);
console.log ("server is running");