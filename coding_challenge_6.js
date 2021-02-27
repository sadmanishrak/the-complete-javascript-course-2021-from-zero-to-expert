const calcTip = (billAmount) => {
    if (billAmount >= 50 && billAmount <= 300) {
        const tipAmount = (15 / 100) * billAmount;
        return tipAmount;
    } else {
        const tipAmount = (20 / 100) * billAmount;
        return tipAmount;
    }
}

let bills = [125, 555, 44];
console.log(bills);
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);
let total = [tips[0] + bills[0], tips[1] + bills[1], tips[2] + bills[2]]
console.log(total);