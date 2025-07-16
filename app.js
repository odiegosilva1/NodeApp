const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain: charset=utf-8');
  res.end('Olá tudo certo');
});

const porta = 3000;
const host = 'localhost';

server.listen(porta, host, () => {
  console.log(`Server running http://${host}:${porta}/`);
  
});
