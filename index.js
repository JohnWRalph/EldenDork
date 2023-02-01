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
const Pet = require('./characters/pet');
const { classNames } = require('./config/config');


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

// inflict damage sound
var sound = new Audio("https://www.fesliyanstudios.com/play-mp3/4036");
var soundDeath = new Audio("https://soundboardguy.com/wp-content/uploads/2021/05/wilhelm-scream.mp3");

// death animation
// var imageRect = image.getBoundingClientRect();


//my character in the game. changes game to game depending on choices mad by user
// const character 

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
        classes.style.display = "none";
        whole.style.display = "flex";
        // setActiveMob(activeMob);


        console.log(character);
        console.log(character.getDamage(moveChoice));

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
            selectedCharacterImage.classList.add("shake");
            sound.play();
            activeMobImage.classList.add("shake");
            selectedCharacterImage.addEventListener("animationend", function () {
                selectedCharacterImage.classList.remove("shake");
            });
            activeMobImage.addEventListener("animationend", function () {
                activeMobImage.classList.remove("shake");
            });
            displayCharacterInfo(character);
            displayMobInfo(activeMob);
            console.log(mobIteration)
            if (activeMob.health <= 0 && mobIteration < mobs.length - 1) {
                console.log("You Won! Face Next mob?");
                soundDeath.play();
                overlayImage.style.display = "Inline-block";


                //
                displayMobInfo(activeMob);
                fightButton.disabled = true;
                nextMobButton.disabled = false;
                toggleNextMobDisplay();
                loadNextMob();
                return;
            } if (activeMob.health <= 0 && character.health > 0 && mobIteration == mobs.length - 1) {
                soundDeath.play();
                overlayImage.style.display = "Inline-block";

                setTimeout(function () {
                    alert("You've won!");
                }, 1500);

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
            overlayImage.style.display = "none";
        } else {
            console.log("Not the load next mob buton")
        }
    });


}

