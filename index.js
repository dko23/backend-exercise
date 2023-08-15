const http = require('http');

const clientRequest = (req, res) => {
    res.write("<h1>welcome to user</h1>")
    res.end()
}
const checkout = (req, res) => {
  res.write('<h1>checkout page</h1>')
  res.end()
}

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    clientRequest(req, res);
  } else if (req.url === '/checkout') {
    checkout(req, res);
  }
});

server.listen(3003, () => {
  console.log('Server started successfully');
});




