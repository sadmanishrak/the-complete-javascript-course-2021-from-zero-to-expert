const sadman = {
    firstName: 'Sadman',
    lastName: 'Ishrak',
    birthYear: 1996,
    job: 'Coder',
    friends: ['Kaisan', 'Mourin', 'Sami'],
    hadDriversLicense: true,

    // calcAge: function (birthYear) {
    //     return 2037 - birthYear;
    // }

    // calcAge: function () {
    //     // console.log(this); // the keyword this contains the whole object
    //     return 2021 - this.birthYear;
    // }
    calcAge: function () {
        // console.log(this); // the keyword this contains the whole object
        // return 2021 - this.birthYear;
        this.age = 2021 - this.birthYear;
        return this.age;
    },

    getSummary: function () {
        return (`${this.firstName} is a ${this.calcAge()}-year old ${sadman.job}, and he has ${this.hadDriversLicense ? 'a' : 'no'} driver's license`);
    }

}

console.log(sadman.calcAge());

console.log(sadman.age);
console.log(sadman.age);
console.log(sadman.age);
console.log(sadman.age);

console.log(sadman.getSummary());
// console.log(sadman['calcAge'](1991));