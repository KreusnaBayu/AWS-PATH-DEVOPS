const http = require('http');
const os = require('os');

http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    message: 'Halo dari Docker di EC2!',
    hostname: os.hostname(),
    time: new Date().toISOString()
  }));
}).listen(3000, () => console.log('Server jalan di port 3000'));