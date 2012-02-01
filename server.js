var http = require("http");
var url  = require("url");


function start (route,handle) {
    
    function onRequest (request, response) {
        console.log ("request received");
        
        var postData = "";
        var pathname = url.parse(request.url).pathname;
        console.log ("Request for " + pathname + " received");
        
        request.setEncoding("utf8");
        
        request.addListener("data", function(postDataChunk) {
            postData += postDataChunk;
            console.log("Received POST data chunk '"+      postDataChunk + "'.");
        });
            
        request.addListener("end", function() {
            route(pathname, handle, response, postData);
        });
                
        console.log ("request processed");
    }
    
    http.createServer(onRequest).listen(process.env.PORT);
    console.log ("server is running");
}

exports.start = start;