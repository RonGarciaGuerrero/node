var http = require('http').createServer();

function webServer (req,res) 
{
res.writeHead(200,{'Content-Type':'text/html'}).end('<h1>Hola Node.js</h1>');
res.end('<h1>Hola Node.js</h1>');
}
http
    .on('request',webServer)
    .listen(3000,'localhost');
  console.log('Server running at http://localhost:3000')