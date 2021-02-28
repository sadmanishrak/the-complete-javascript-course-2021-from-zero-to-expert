
for (let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}.`);
}


const sadman = [
    'Sadman',
    'Ishrak',
    2021 - 1996,
    'teacher',
    [
        'Michael',
        'Peter',
        'Steven'
    ],
    true
]

const types = [];

for (let i = 0; i <= sadman.length - 1; i++) {
    console.log(sadman[i], typeof (sadman[i]));
    // Adding elemnts to an empty array
    // types[i] = typeof (sadman[i]);
    types.push(typeof (typeof sadman[i]));

}

console.log(types);

const years = [1991, 2007, 1969, 2021];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2021 - years[i]);
}

console.log(ages);

// continue and break statements

for (let i = 0; i <= sadman.length - 1; i++) {
    if (typeof sadman[i] !== 'string') continue;
    console.log(sadman[i], typeof (sadman[i]));
}

for (let i = 0; i <= sadman.length - 1; i++) {
    if (typeof sadman[i] !== 'number') break;
    console.log(sadman[i], typeof (sadman[i]));
}

const sadman = [
    'Sadman',
    'Ishrak',
    2021 - 1996,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
]

for (let i = sadman.length - 1; i >= 0; i--) {
    console.log(i, sadman[i]);
}

for (let exercise = 1; exercise <= 3; exercise++) {
    console.log(`Starting exercise ${1}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise: ${exercise} Lifting weight rep ${rep}`);
    }
}

let rep = 1;
while (rep <= 10) {
    console.log('Lifting weight repition ' + rep);
    rep++;
}
