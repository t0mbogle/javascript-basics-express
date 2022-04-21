function negate(a) {
  return !a;
};

function both(a, b) {
  return a && b ? true : false;
};

function either(a, b) {
  return a || b ? true : false;
};

function none(a, b) {
  return !(a || b);
};

function one(a, b) {
  return (!a && b) || (a && !b);
};

function truthiness(a) {
  return Boolean(a);
};

function isEqual(a, b) {
    return a === b;
};

function isGreaterThan(a, b) {
  return  a > b;
};

function isLessThanOrEqualTo(a, b) {
  if (a <= b) {
    return true;
  } else {
    return false;
  }
};

function isOdd(a) {
  if (a%2 !== 0) {
    return true;
  } else {
    return false;
  }
};

function isEven(a) {
  if (a%2 === 0) {
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  if (Math.sqrt(a) % 1 === 0) {
    return true;
  } else {
    return false;
  }
};

function startsWith(char, string) {
  if (string[0] === char) {
    return true;
  } else {
    return false;
  }
};



function containsVowels(string) {
  return /[aeiou]/i.test(string);
};



function isLowerCase(string) {
  return string === string.toLowerCase();
};



module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
