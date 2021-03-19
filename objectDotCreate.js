const PersonProto = {
  calcAge() {
    console.log(2021 - this.birthYear);
  },

  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = "Steven";
steven.birthYear = 2002;

steven.calcAge();

console.log(steven.__proto__);

const sarah = Object.create(PersonProto);
sarah.init("Sarah", 1998);
sarah.calcAge();
