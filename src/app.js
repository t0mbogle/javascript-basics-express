const express = require('express');

const {
  sayHello,
  uppercase,
  lowercase,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.use(express.json()); // JSON parsing middleware
// Access JSON data sent to your application by referencing req.body()

// ------ strings.js

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

// ------ numebrs.js

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

app.get('/numbers/add/:a/and/:b', (req, res) => {
  const a = parseInt(req.params.a);
  const b = parseInt(req.params.b);

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(a, b) });
  }
});

app.get('/numbers/subtract/:a/from/:b', (req, res) => {
  const { a } = req.params;
  const { b } = req.params;

  if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(-a, -b) });
  }
});

app.post('/numbers/multiply/', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (!a || !b) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: multiply(a, b) });
  }
});

app.post('/numbers/divide/', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    // undefined is needed as the 'divides 0 by a number' test would fail. (!a || !b) will include 0.
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters "a" and "b" must be valid numbers.' });
  } else {
    res.status(200).json({ result: divide(a, b) });
  }
});

app.post('/numbers/remainder/', (req, res) => {
  const { a } = req.body;
  const { b } = req.body;

  if (b === 0) {
    res.status(400).json({ error: 'Unable to divide by 0.' });
  } else if (a === undefined || b === undefined) {
    res.status(400).json({ error: 'Parameters "a" and "b" are required.' });
  } else if (isNaN(a) || isNaN(b)) {
    res.status(400).json({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: remainder(a, b) });
  }
});

// ------ booleans.js

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

app.post('/booleans/negate/', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: negate(value) });
});

app.post('/booleans/truthiness/', (req, res) => {
  const { value } = req.body;

  res.status(200).json({ result: truthiness(value) });
});

app.get('/booleans/is-odd/:number', (req, res) => {
  const { number } = req.params;

  if (isNaN(number)) {
    res.status(400).json({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).json({ result: isOdd(req.params.number) });
  }
});

app.get('/booleans/:string/starts-with/:character', (req, res) => {
  const { character } = req.params;
  const { string } = req.params;

  if (character.length > 1) {
    res.status(400).json({ error: 'Parameter "character" must be a single character.' });
  } else if (string[0] !== character) {
    res.status(200).json({ result: startsWith(string, character) });
  } else {
    res.status(200).json({ result: true });
  }
});

module.exports = app;
