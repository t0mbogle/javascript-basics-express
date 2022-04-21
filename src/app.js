const express = require('express');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

// lowercase

// first-characters

// nth character

module.exports = app;
