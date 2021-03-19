
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  calcAge() {
    console.log(2021 - this.birthYear);
  }
}

class StudentCl extends PersonCl {
  constructor(fullName, birthYear, course) {
    // In a child class this super function has to happen first at all times
    super(fullName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(`My name is ${this.fullName} and i study ${this.course}`);
  }

  calcAge() {
    console.log(
      `I am ${2037 - this.birthYear} years old, but I feel like ${
        2021 + 10 - this.birthYear
      }`
    );
  }
}

const martha = new StudentCl("Martha Clair", 2000, "EEE");
console.log(martha);

martha.introduce();
martha.calcAge();
