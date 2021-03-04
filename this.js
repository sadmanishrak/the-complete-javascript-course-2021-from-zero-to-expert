'use strict';
// console.log(this);

const calcAge = function (birthYear) {
  console.log(2021 - birthYear);
  //   console.log(this);
};

calcAge(1991);

const calcAgeArrow = birthYear => {
  console.log(2021 - birthYear);
  console.log(this);
};

calcAgeArrow(1991);

const sadman = {
  year: 1996,
  calAge: function () {
    console.log(2021 - this.birthYear);
    console.log(this);
  },
};

sadman.calAge();

const matilda = {
  year: 2017,
};
matilda.calAge = sadman.calAge;
matilda.calAge();

const f = sadman.calAge;
console.log(f);
f();
