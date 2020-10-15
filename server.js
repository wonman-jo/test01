const http = require('http');

//create a server object:
const server = http.createServer((req, res) => {
  res.write('Hello World!'); //write a response to the client
  res.end(); //end the response
})

server.listen(8080); //the server object listens on port 8080
