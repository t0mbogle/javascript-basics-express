const express = require('express');
const res = require('express/lib/response');
const { sayHello } = require('./lib/strings');
const { uppercase } = require('./lib/strings');
const { lowercase } = require('./lib/strings');
const { firstCharacter } = require('./lib/strings');
const { firstCharacters } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  res.status(200).json({ result: sayHello(req.params.string) });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: uppercase(req.params.string) });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: lowercase(req.params.string) });
});

app.get('/strings/first-characters/:string', (req, res) => {
  const chars = req.query.length;

  if (chars) {
    res.status(200).json({ result: firstCharacters(req.params.string, chars) });
    /* In the firstCharacters() function the second parameter is 'n', i.e. the length of the string you want to return. 
    Which is replaced with 'chars' here. */
  } else {
    res.status(200).json({ result: firstCharacter(req.params.string) });
  }
});

module.exports = app;
