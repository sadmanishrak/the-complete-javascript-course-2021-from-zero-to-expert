'use strict';

// Primitive types refreance types
let lastName = 'William';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

const jessica = {
  firstName: 'Jessica',
  lastName: 'William',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log(`Before Marriage: ${jessica}`);
console.log('After Marriage: ', marriedJessica);

// Copying objects
const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica1);
jessicaCopy.lastName = 'Davis';

console.log('Befor marriage', jessica1);
console.log('After marriage', jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('Jake');

console.log('Befor marriage', jessica1);
console.log('After marriage', jessicaCopy);
