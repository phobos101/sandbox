var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
   res.writeHead(200, {'Content-Type': 'text/html'});
   var html = fs.readFileSync(__dirname + '/template.html', 'utf8');
   html = html.replace('{title}', 'Hello World');
   html = html.replace('{message}', 'Using a template!');
   res.end(html); 
}).listen(8000, '127.0.0.1');