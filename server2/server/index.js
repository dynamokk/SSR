import http from 'http';

http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello fffdf\n');
}).listen(3001);

console.log('Server running at http://127.0.0.1:3001/');