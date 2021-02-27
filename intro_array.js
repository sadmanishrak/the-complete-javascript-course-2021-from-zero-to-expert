const friend1 = 'Mike';
const friend2 = 'Jame';
const friend3 = 'Peter';

const friends = ['Mike', 'Steven', 'Peter'];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2021);
console.log(y);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length, typeof (friends.length));
console.log(friends[(friends.length) - 1])

friends[2] = 'Jay';
console.log(friends);

const firstName = 'Sadman';
const sadman = [firstName, 'Ishrak', 2021 - 1996, 'developer', friends];
console.log(sadman, sadman.length);

// Exercise
const calcAge = function (birthYear) {
    return (2037 - birthYear);
}

const years = [1996, 1967, 2991, 2018, 1876];

console.log(calcAge(years));

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[2]);
const age4 = calcAge(years[3]);
const age5 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3, age4, age5);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2]), calcAge(years[3]), calcAge(years[4])];

console.log(ages);