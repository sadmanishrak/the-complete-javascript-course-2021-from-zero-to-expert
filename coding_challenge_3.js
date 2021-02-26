const gameOneDolphins = prompt('Enter Dolphin first game score.');
const gameTwoDolphins = prompt('Enter Dolphin second game score.');
const gameThreeDolphins = prompt('Enter Dolphin third game score.');
const gameOneKoala = prompt('Enter Koala first game score.');
const gameTwoKoala = prompt('Enter Koala second game score.');
const gameThreeKoala = prompt('Enter Koala third game score.');
const avgDolphin = (gameOneDolphins + gameTwoDolphins + gameThreeDolphins) / 3;
const avgKoala = (gameOneKoala + gameTwoKoala + gameThreeKoala) / 3;
if ((avgKoala === avgDolphin) && (avgDolphin > 100) && (avgKoala > 100)) {
    console.log(`It's a draw with score ${avgDolphin} for Dolphin and ${avgKoala} for Koala`);
} else if ((avgKoala > avgDolphin) && avgKoala > 100) {
    console.log(`Koala is winner with score ${avgKoala} and Dolphin loses with score ${avgDolphin}`);
} else if ((avgDolphin > avgKoala) && avgDolphin > 100) {
    console.log(`Dolphin is winner with score ${avgDolphin} and Koala loses with score ${avgKoala}`);
} else if ((avgKoala < 100) && (avgDolphin < 100)) {
    console.log("None wins and no draw");
}