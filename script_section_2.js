/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);
console.log('Jonas');
console.log(23);
let firstName = "Jonas";
console.log(firstName);
//let PI = 3.142;
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof null);
console.log(typeof year);
*/
/*
let age = 30;
age = 31;

// const variables can't be changed
const birthYear = 1991;

const job;

var job = "programmer";
job = "teacher";
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas);
console.log(ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Sadman';
const lastName = 'Ishrak';
console.log(firstName + " " + lastName);

let x = 10 + 5; // 15
console.log(x);
x += 10; // x = x + 10 = 25
console.log(x);
x *= 4; // x = x * 4
console.log(x);
x++; // x = x + 1
console.log(x);
x--; // x = x + 1
console.log(x);

// Conparison Operator
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 10;

console.log(now - 1991 > now - 2018);
*/
/*
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(now - 1991 > now - 2018);
console.log(25 - 10 - 5);
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
*/

/*
const firstName = "Sadman";
const job = "teacher";
const birthYear = 1996;
const year = 2021;

const sadman = "I am " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";

console.log(sadman);

const sadmanNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}`;

console.log(sadmanNew);
*/


/*
const age = 14;
const isOldEnough = (age >= 18);

if (isOldEnough) {
    console.log(`Sarah can start driving license.`);
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is to young. Wait another ${yearsLeft} years.`);
}

const birthYear = 2012;

let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century);
*/
/*
const inputYear = '1991';
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("Jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I am " + 25 + " years old");
console.log('23' - '10' - 3); // converts to number. same goes for diving, power as well.
console.log('23' + '10' + 3); //converts to string

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

/*
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('Sadman'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 0;
if (money) {
    console.log("Don't spend it all");
} else {
    console.log('You should get a job');
}

let height;
if (height) {
    console.log("height is defined");
} else {
    console.log("height is undefined");
}
*/
/*
const age = 18;
if (age === 18) {
    console.log('You just became an adult');
}

console.log('18' == 18) // does type coertion

let favorite = Number(prompt("What is your favorite number?"));
console.log(favorite);
console.log(typeof (favorite));

if (favorite === 23) {
    console.log('Cool! 23 is an amazing number.');
} else if (favorite !== 23) {
    console.log(`Answer is not 23`);
}
*/
/*
const hasDriversLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someone else should drive');
// }

const isTired = false;
console.log(hasDriversLicense || hasGoodVision || isTired);

console.log(hasDriversLicense && hasGoodVision && isTired);

if (hasGoodVision && hasDriversLicense && !isTired) {
    console.log("Sarah is able to drive.");
} else {
    console.log("Someone else should drive.");
}
*/
/*
const day = 'monday';

switch (day) {
    case 'monday':
        console.log('It\'s monday');
        console.log('It\'s still monday');
        break;
    case 'tuesday':
        console.log('It\s tuesday');
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write coding examples.');
        break;
    case 'friday':
        console.log('Record videos');
        break;
    case 'saturday':
    case 'sunday':
        console.log('Free day');
        break;
    default:
        console.log('Not a valid day');
}
*/
/*
const age = 15;
age >= 18 ? console.log(`I like to drink water`) : console.log(`I like to drink honey`);
const drink = age >= 18 ? 'water' : 'honey';
console.log(drink);

console.log(`I like to drink ${age >= 18 ? 'water' : 'honey'}`);
*/