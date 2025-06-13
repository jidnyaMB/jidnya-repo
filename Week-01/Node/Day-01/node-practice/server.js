const { createServer } = require('node:http');

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  const { url, method } = req;

  if (method === 'GET') {
    if (url === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('Home Page');
      //   res.end(renderHTML('Home', '<h1>Welcome to My Node.js Server!</h1><p>This is the home page.</p>'));
    } else if (url === '/about') {
      res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('About Page');
      //   res.end(renderHTML('Home', '<h1>Welcome to My Node.js Server!</h1><p>This is the home page.</p>'));
    } 
  
}});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
