const Bandit = require("./characters/bandit");
const Warlock = require("./characters/warlock");
const Monk = require("./characters/monk");

function chooseClass(x) {
    if (x === "bandit") {

        console.log("You've chosen Bandit! Here are your beginning stats:\n");

        const character = new Bandit('myBandit')
        const characterSelection = document.querySelectorAll(".character-select");

        characterSelection.forEach(button => {
            button.disabled = true;
        });

        // return character;
        // return character;
        // monkButton.disabled = true;
        // warlockButton.disabled = true;
        // const character = document.getElementById('characterStats');
        return character;
    } else if (x === 'warlock') {
        console.log("You've chosen Warlock! Here are your beginning stats");
        // console.log(x);
        character = new Warlock('myWarlock')

        const characterSelection = document.querySelectorAll(".character-select");
        console.log(characterSelection)
        characterSelection.forEach(button => {
            button.disabled = true;
        });
        return character;
    } else if (x === 'monk') {
        console.log("You've chosen Monk! Here are your beginning stats");

        character = new Monk('myMonk')

        const characterSelection = document.querySelectorAll(".character-select");

        characterSelection.forEach(button => {
            button.disabled = true;
        });
        return character;
    } else {
        throw Error("Not a number");
    }
    // return character;
}
module.exports = chooseClass;