const mark = {
    fullname: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

mark.calcBMI();

const john = {
    fullname: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height ** 2);
        return this.BMI;
    }
}

john.calcBMI();

console.log(`${mark.fullname}'s BMI (${mark.BMI}) is ${mark.BMI > john.BMI ? 'higher' : 'lower'} than ${john.fullname}`);

console.log(`${john.fullname}'s BMI (${john.BMI}) is ${john.BMI > mark.BMI ? 'higher' : 'lower'} than ${mark.fullname}`);