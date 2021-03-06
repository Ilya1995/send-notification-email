const express = require('express');
const path = require('path');

const time = new Date();
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/startServer', function(req, res) {
  res.send(JSON.stringify({ time }));
});

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
