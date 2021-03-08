
const flight = 'LM234';
const sadman = {
  name: 'Sadman Ishrak',
  passport: 684543243,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LM999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 684543243) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, sadman);
// console.log(flight);
// console.log(sadman);
// console.log();

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000);
};

newPassport(sadman);
checkIn(flight, sadman);
