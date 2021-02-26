// Function declaration
function calcAge1(birthYear) {
    return (2021 - birthYear);
}

console.log(calcAge1(1996));

// Function Expression
const calcAge2 = function (birthYear) {
    return 2021 - birthYear;
}

const age2 = calcAge2(1991);

console.log(age2);