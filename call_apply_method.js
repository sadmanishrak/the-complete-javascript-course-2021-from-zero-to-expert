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
