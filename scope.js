'use strict';
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1992 && birthYear <= 1998) {
      const firstName = 'Steven';
      const str = `Oh, and you are a milenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }

      output = 'New Output';

      add(2, 3);
    }
  }
  printAge();
  console.log(firstName);
  return age;
}

const firstName = 'Jonas';
calcAge(1992);
console.log(output);
