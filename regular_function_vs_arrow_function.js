'use strict';
var firstName = 'Matilda';

const sadman = {
  firstName: 'Sadman',
  year: 1996,
  calAge: function () {
    console.log(this);
    console.log(2021 - this.year);
    // Solution 1
    // const self = this;

    // const isMillenial = function () {
    //   console.log(self);
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // };
    // Solution 2

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };

    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};

sadman.greet();
console.log(this.firstName);
sadman.calAge();

// arguments keyowrd

const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};

addExpr(2, 5);
addExpr(2, 5, 8, 12);

var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
};
