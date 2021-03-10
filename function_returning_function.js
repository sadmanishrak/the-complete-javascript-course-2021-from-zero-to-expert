const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Sadman');
greeterHey('Staph');

greet('Hello')('Sadman');

const greetArr = greeting => name => {
  console.log(`${greeting} ${name}`);
};
