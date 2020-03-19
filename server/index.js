const express = require('express');
const time = new Date();
console.log(time);

const app = express();
const path = require('path');
const port = 5000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/startServer', function(req, res) {
  res.send(JSON.stringify({ time }));
});
app.get('/*', function(req, res) {
  console.log(1);

  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
