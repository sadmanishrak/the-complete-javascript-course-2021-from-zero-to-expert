'use strict';

const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher order function
const transformer = function (str, fn) {
  console.log(str);
  console.log('Transformed string: ' + fn(str));
  console.log(`transformed by: ${fn.name}`);
};

transformer('JavaScript is best', upperFirstWord);

// JS uses callback a lot in program

const hi5 = function () {
  console.log('HI5');
};
document.body.addEventListener('click', hi5);

['Jonas', 'Martha', 'Adam'].forEach(hi5);
