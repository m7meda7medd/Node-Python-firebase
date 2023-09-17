const express = require('express');
const fs = require('fs');
const os = require('os');
const cors = require('cors');

const app = express();

// CORS middleware
app.use(cors());

app.get('/', (req, res) => {
  const filePath = '/home/roner1/node_pi/website.html';
  const fileData = fs.readFileSync(filePath);
  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(fileData);
});

const serverPort = 3000;
app.listen(serverPort, () => {
  const networkInterfaces = os.networkInterfaces();
  const ipAddress = networkInterfaces['eth0'] ? networkInterfaces['eth0'][0]['address'] : 'localhost';
  console.log(`Server listening on ${ipAddress}:${serverPort}`);
});
