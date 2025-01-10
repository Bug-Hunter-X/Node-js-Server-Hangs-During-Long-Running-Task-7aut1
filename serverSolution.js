const http = require('http');

const server = http.createServer((req, res) => {
  // Use a timer to handle the long-running task asynchronously
  setTimeout(() => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World!');
  }, 5000); // Simulate a 5-second task
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});