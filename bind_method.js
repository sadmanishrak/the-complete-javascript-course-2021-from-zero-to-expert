'use strict';

const lufthansa = {
  airline: 'Luthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNumber, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.iataCode}${flightNumber}`,
      name,
    });
  },
};

lufthansa.book(230, 'Loki');
lufthansa.book(232, 'Loma');
console.log(lufthansa);

const eurowings = {
  airline: `Eurowings`,
  iataCode: `EW`,
  bookings: [],
};

const book = lufthansa.book;
// Does not work
// book(23, 'Sara Ellis');

book.call(eurowings, 23, 'Sara Ellis');
console.log(eurowings);

book.call(eurowings, 48, 'Kabila');
console.log(eurowings);

const swiss = {
  airline: `swiss`,
  iataCode: `SW`,
  bookings: [],
};

book.call(swiss, 678, 'Harold Cooper');
console.log(swiss);

// Apply Method
const flightData = [345, 'Hamilton Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

// The line below does the sanme as liones above
book.call(swiss, ...flightData);

// Bind Method

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookSW = book.bind(swiss);

bookEW(23, 'Steven Williams');

const bookEW23 = book.bind(eurowings, 23);
bookEW23('Sadman Ishrak');
bookEW23('Jamil Ahmed');

// With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial Application

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(100));
console.log(addVAT(232));

// Does the same thing as above

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));
