var http = require('http');

http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   res.end('<html><head></head><body><h1>Hello</h1></body></html>'); 
}).listen(8000, '127.0.0.1');