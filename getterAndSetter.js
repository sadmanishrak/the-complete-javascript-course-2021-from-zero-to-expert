// Class Expression
// const PersonCl = class{}

// Class decleration
class PersonCl {
  constructor(fullName, birthYear) {
    this.birthYear = birthYear;
    this.fullName = fullName;
  }

  //   Methods will be added to .prototype property
  calcAge() {
    console.log(2021 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2021 - this.birthYear;
  }

  //   Getter and setter validation system to set a value to a property that already exists
  set fullName(name) {
    if (name.includes(" ")) {
      this._fullName = name;
    } else {
      alert(`${name} is not a full name`);
    }
  }

  get fullName() {
    return this._fullName;
  }
}
const jessica = new PersonCl("Jessica Davis", 1996);
console.log(jessica);
jessica.calcAge();
console.log(jessica.age); // Only possible because of getter in the class
console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
jessica.greet();

// 1. Classes are not hoisted
// 2. Classes are first class citizens. We can pass them into functions and also return them from functions. They are actuallt juts pecial kind of function behind the screen.
// 3. Classes are executed in strict mode.

const walter = new PersonCl("Walter", 1965);
console.log(walter);
const account = {
  owner: "Jonas",
  movements: [200, 530, 120, 300],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    return this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
