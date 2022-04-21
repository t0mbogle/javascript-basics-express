const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:strings', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.strings) });
});

module.exports = app;
