﻿var http = require('http');

var server = http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("Hello World from Node.js\n");
});

server.listen(8881);