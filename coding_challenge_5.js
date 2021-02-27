const calcAvg = (firstScore, secondScore, thirdScore) => {
    return ((firstScore + secondScore + thirdScore) / 3);
}

const checkWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins > avgKoalas) {
        return console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    } else if (avgKoalas > avgDolphins) {
        return console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    }
}

const firstScoreKoala = Number(prompt('Enter 1st Koala score'));
const secondScoreKoala = Number(prompt('Enter 2nd Koala score'));
const thirdScoreKoala = Number(prompt('Enter 3rd Koala score'));

const firstScoreDolphins = Number(prompt('Enter 1st Dolphins score'));
const secondScoreDolphins = Number(prompt('Enter 2nd Dolphins score'));
const thirdScoreDolphins = Number(prompt('Enter 3rd Dolphins score'));

const avgDolphins = calcAvg(firstScoreDolphins, secondScoreDolphins, thirdScoreDolphins);
const avgKoalas = calcAvg(firstScoreKoala, secondScoreKoala, thirdScoreKoala);

checkWinner(avgDolphins, avgKoalas);
