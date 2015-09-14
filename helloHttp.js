//var http = require('http');

//var server = http.createServer(function (request, response) {
//    response.writeHead(200, { "Content-Type": "text/plain" });
//    response.end("Hello World\n");
//});

//server.listen(7000);


var serialport = require('serialport');
var SerialPort = serialport.SerialPort;

// list serial ports:
serialport.list(function (err, ports) {
    ports.forEach(function (port) {
        console.log(port.comName);
    });
});