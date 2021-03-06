"use strict";

const Person = function (firstName, birthYear) {
  // Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  //   Never create a method in a constructor function, it is a bad practice
  //   this.calcAge = function () {
  //     console.log(2021 - this.birthYear);
  //   };
};

const jonas = new Person("Jonas", 1991);

console.log(jonas);

// 1. New empty object {} is created
// 2. Function is called. "this" keyword has been set to the new empty object that has been created in the first step.
// 3. This newly created empty object is linked to a prototype.
// 4. Object that was created is automatically returned from the constructor function.

const matilda = new Person("Matilda", 2011);
const jack = new Person("Jack", 1995);
console.log(matilda, jonas, jack);

console.log(jonas instanceof Person);

// Prototypes
Person.prototype.calcAge = function () {
  console.log(2021 - this.birthYear);
};

jonas.calcAge();
matilda.calcAge();
jack.calcAge();

console.log(jonas.__proto__);
console.log(jonas.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jonas));

Person.prototype.species = "Homo Sapiens";
console.log(jonas.species, matilda.species, jack.species);

console.log(jonas.hasOwnProperty("firstName"));
console.log(jonas.hasOwnProperty("species"));
