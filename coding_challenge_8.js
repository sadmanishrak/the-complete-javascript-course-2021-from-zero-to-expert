const calcTip = (billAmount) => {
    if (billAmount >= 50 && billAmount <= 300) {
        const tipAmount = (15 / 100) * billAmount;
        return tipAmount;
    } else {
        const tipAmount = (20 / 100) * billAmount;
        return tipAmount;
    }
}

let bills = [222, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
console.log(bills);
let tips = [];
console.log(tips);
let total = []
console.log(total);

for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
    console.log(calcTip(bills[i]))
    total.push(tips[i] + bills[i]);
    console.log(tips[i] + bills[i])
}

console.log(tips);
console.log(total);

const calcAverage = (param) => {
    let sum = 0;
    for (let i = 0; i < param.length; i++) {
        sum = sum + param[i];
    }

    return (sum / (param.length));
}

console.log(calcAverage(tips));
console.log(calcAverage(total));
console.log(calcAverage(bills));