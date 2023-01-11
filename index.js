console.log("Ready");
//require all files
const mobs = require('./mobs/mobs');
const chooseClass = require("./chooseClass");
const toggleCharacterInfoDisplay = require("./toggleCharacterInfoDisplay");
const displayCharacterInfo = require("./displayCharacterInfo");
const setActiveMob = require("./setActiveMob");
const toggleMoveChoiceDisplay = require("./toggleMoveChoiceDisplay");
const waitForMoveChoice = require("./waitForMovechoice");
const displayMoveChoice = require('./displayMoveChoice');
const displayMobInfo = require('./displayMobInfo');
const toggleFightButton = require("./toggleFightButton");
const toggleNextMobDisplay = require('./toggleNextMobDisplay');

// const chooseMove = require("./chooseMove");

// testing code
document.getElementById("mob0Name").innerHTML = mobs[0].name;
document.getElementById("mob1Name").innerHTML = mobs[1].name;
document.getElementById("mob2Name").innerHTML = mobs[2].name;
//
//character select buttons
const banditButton = document.getElementById("bandit");
const monkButton = document.getElementById("monk");
const warlockButton = document.getElementById("warlock");

// get all characters with data-class character-select
var characterSelection = document.querySelectorAll(".character-select");
var moveSelection = document.querySelectorAll(".move-select");

//my character in the game. changes game to game depending on choices mad by user
let character;
let moveChoice;
let activeMob;
let mobIteration = 0;
//activeMob is the monster we are currently fighting. should be one of MobType such as goblin
activeMob = mobs[mobIteration];
console.log(activeMob);


// initializes game and starts gameloop once character is selected
document.addEventListener("click", function (event) {
    // Check if the element that was clicked has the class "my-class"
    if (event.target.classList.contains("character-select")) {
        const classChoice = event.target.id;
        character = chooseClass(classChoice);
        toggleCharacterInfoDisplay();
        displayCharacterInfo(character);
        toggleMoveChoiceDisplay();
        displayMobInfo(activeMob);
        // setActiveMob(activeMob);





    } else {
        console.log("Not a character select button")
    }
});

chooseMove();

function chooseMove() {
    document.addEventListener("click", function (event) {
        // Check if the element that was clicked has the class "my-class"
        if (event.target.classList.contains("move-select")) {
            moveChoice = event.target.id;
            displayMoveChoice(moveChoice);
            toggleFightButton();
            console.log(moveChoice);



        } else {
            console.log("Not a character select button")
        }
    });
}

fight();
function fight() {
    console.log("step1")

    document.addEventListener("click", function (event) {
        console.log("step2")

        if (event.target.classList.contains("fight-select") && activeMob.health > 0 && character.health > 0) {
            console.log("step3")
            activeMob.health = activeMob.health - character.getDamage(moveChoice);
            character.health = character.health - activeMob.attack;
            displayCharacterInfo(character);
            displayMobInfo(activeMob);
            console.log(mobIteration)
            if (activeMob.health <= 0 && mobIteration < mobs.length - 1) {
                console.log("You Won! Face Next mob?");
                displayMobInfo(activeMob);
                fightButton.disabled = true;
                nextMobButton.disabled = false;
                toggleNextMobDisplay();
                loadNextMob();
                return;
            } if (activeMob.health <= 0 && mobIteration == mobs.length - 1) {
                alert("You've won!");
                return;
            } if (character.health <= 0) {
                alert("You've died");
                return;
            }
            return;
        } if (event.target.classList.contains("fight-select") && activeMob.health <= 0 && character.health > 0) {
            if (mobIteration < mobs.length - 1) {
                console.log("step4")

            } else {
                alert("You've won the game");
                return;
            }
        } if (character.heath <= 0) {
            alert("You've died!")
        }

    }
    )
}

function loadNextMob() {
    document.addEventListener("click", function (event) {
        // Check if the element that was clicked has the class "my-class"
        if (event.target.classList.contains("next-mob-select") && activeMob.health <= 0) {
            console.log("mobiteration:", mobIteration);
            mobIteration = mobIteration + 1;
            activeMob = mobs[mobIteration];
            console.log(activeMob);
            console.log(activeMob);
            displayMobInfo(activeMob);
            fightButton.disabled = false;
            nextMobButton.disabled = true;

        } else {
            console.log("Not the load next mob buton")
        }
    });


}

