// Classes can be used in two ways. One of them is "class expression" the other is "class decleration"

// Class Expression
// const PersonCl = class{}

// Class decleration
class PersonCl {
  constructor(firstName, birthYear) {
    this.birthYear = birthYear;
    this.firstName = firstName;
  }

  //   Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const jessica = new PersonCl("Jessica", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// Short Notes to Remember
// 1. Classes are not hoisted
// 2. Classes are first class citizens. We can pass them into functions and also return them from functions. They are actuallt juts pecial kind of function behind the screen.
// 3. Classes are executed in strict mode.
