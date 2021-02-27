const sadman = {
    firstName: 'Sadman',
    lastName: 'Ishrak',
    age: 2021 - 1996,
    job: 'Coder',
    friends: ['Kaisan', 'Mourin', 'Loki']
}

console.log(sadman.lastName);
console.log(sadman['lastName']);
console.log(sadman['firstName']);

const nameKey = 'Name';

console.log(sadman['first' + nameKey]);
console.log(sadman['last' + nameKey]);

const interestedIn = prompt('What do you wnt to know about Sadman? Choose firstName, lastName, age, job or friends');
console.log(sadman.interestedIn); // will not work but the code below will work and will return -1

if (sadman[interestedIn]) {
    console.log(sadman[interestedIn]);
} else {
    console.log('Wrong request!');
}

sadman.location = 'Bangladesh';
sadman['twitter'] = '@sadmanishrak';
console.log(sadman);

console.log(`${sadman.firstName} has ${sadman.friends.length} friends. Number one is ${sadman.friends[0]}.`)