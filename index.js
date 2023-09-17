const express = require('express');
const fs = require('fs');
const cors = require('cors');
const os = require('os');

const app = express();
const port = 3000;

const networkInterfaces = os.networkInterfaces();
let serverIp = '';

for (const iface of Object.values(networkInterfaces)) {
  for (const alias of iface) {
    if (alias.family === 'IPv4' && !alias.internal) {
      serverIp = alias.address;
      break;
    }
  }
  if (serverIp) {
    break;
  }
}

app.use(cors());
app.use(express.json());

app.post('/writeName', (req, res) => {
  const name = req.body.name;
  if (name) {
    try {
      fs.writeFileSync('names.txt', name + '\n', { flag: 'a' });
      res.status(200).send('Name written successfully.');
    } catch (err) {
      res.status(500).send('Failed to write the name.');
    }
  } else {
    res.status(400).send('Name is required.');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://${serverIp}:${port}`);
});
