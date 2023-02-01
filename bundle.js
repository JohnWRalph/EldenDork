(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class Ability {
    constructor(name, attack) {
        this.name = name;
        this.attack = attack;

    }
}

module.exports = Ability;
},{}],2:[function(require,module,exports){
const Ability = require('./ability')

const Fireball = new Ability('fireball', 15);

module.exports = Fireball;
},{"./ability":1}],3:[function(require,module,exports){
const Ability = require('./ability');

const Slash = new Ability('slash', 15);

module.exports = Slash;
},{"./ability":1}],4:[function(require,module,exports){
const Ability = require('./ability')

const strike = new Ability('strike', 10);

module.exports = strike;
},{"./ability":1}],5:[function(require,module,exports){
const Ability = require('./ability')

const SummonPet = new Ability('summonPet');

module.exports = SummonPet;
},{"./ability":1}],6:[function(require,module,exports){
// Spells
const fireball = require('../abilities/fireball');
const Pet = require('./pet');
// const startingPet = new Pet("Pet", 10);
// Abilities 
const dagger = require('../weapons/dagger');
// Warlock model
const Character = require('./character');
const slash = require('../abilities/slash');

class Bandit extends Character {
    constructor(name) {
        super(name, "bandit", 100, 5, 15);
        this.activeAbility = slash;
        this.activeWeapon = dagger;
        // this.activePets.push(startingPet);
        this.image = "https://www.wowisclassic.com/media/CACHE/images/contents/6909/faa3d517-0066-4827-bfd8-6e4caa7a2d8c/c4015b50e01e9b94b61344a4cb279b21.png"
    }
}

module.exports = Bandit;
},{"../abilities/fireball":2,"../abilities/slash":3,"../weapons/dagger":30,"./character":7,"./pet":9}],7:[function(require,module,exports){
const Ability = require('../abilities/ability');
const config = require('../config/config');

class Character {
    constructor(name, className, health, attack, magic) {
        this.name = name;
        this.className = className;
        this.level = 1;
        this.health = health;
        this.attack = attack;
        this.magic = magic;

        this.pets = [];
        this.weapons = [];
        this.abilities = []
        this.activePets = [];
        this.activeWeapon = null;
        this.activeAbility = null;
    }



    levelUp() {
        this.level = this.level + 1;
        if (this.className === config.classNames.WarlockClassNames) {
            this.health = this.health + 6;
            this.attack = this.attack + 1;
            this.magic = this.magic + 3;
        }
    }
    getName() {
        return this.name;
    }

    getClassName() {
        return this.className;
    }

    getLevel() {
        return this.level;
    }
    getDamage(move) {
        if (move === "punch") {
            return this.attack;
        }

        else if (move === "weapon") {
            // console.log(this.activeWeapon.attack);
            const damage = this.activeWeapon.attack;
            return this.activeWeapon.attack;
        } else if (move === "ability") {
            // console.log(this.activeAbility.attack);
            return this.activeAbility.attack;
        } else if (move == "pets") {
     
            if (this.activePets.length >= 1) {
                // console.log(this.activePets.attack);
                return 15;
            } else {
                console.log("Selected ability is not equipped");
                return 0;
            }

        }

    }
    getStatsString() {
        let str = "";
        str += `Health: ${this.health}<br>`;
        str += `Attack: ${this.attack}<br>`;
        str += `Magic: ${this.magic}<br>`;
        str += `Pets: ${this.pets}<br>`;
        str += `Weapons: ${this.weapons}<br>`;
        str += `Abilities: ${this.abilities}<br>`;

        if (this.activePets.length > 0) {
            str += `Active Pets: ${this.activePets.name}<br>`;
        }
        if (this.activeWeapon) {
            str += `Active Weapons: ${this.activeWeapon.name}<br>`;
        }
        if (this.activeAbility) {
            str += `Active Abilites: ${this.activeAbility.name}`;
        }
        return str;
    }
}


// if (this.mana < ability.mana) {
//     console.log("not enough mana");
//     return 0
// }

// this.mana -= ability.mana;

// }
// else if (this.activePet) {
//     const getDamage = this.activePet.damage;
//     return petDamage + this.activePet.damage;
// } else if (this.equippedWeapon) {
//     const
// }

// summonPet(petName) {
//     // if we have a pet in our this.pets array that matches the same in an argument to this function
//     // lets summon it
//     // we can loop over the pets we have to fin it
//     for (let i = 0; i < this.pets.length; i++) {
//         const pet = this.pets[i]; // this pet is equal to an individual pet element in our pets array
//         if (pet.name === petName) {
//             this.activePet = pet;
//         }
//     }
// }

// equipAbility(abilityName) {
//     // if we have a pet in our this.pets array that matches the same in an argument to this function
//     // lets summon it
//     // we can loop over the pets we have to fin it
//     for (let i = 0; i < this.ability.length; i++) {
//         const ability = this.abilities[i]; // this pet is equal to an individual pet element in our pets array
//         if (ability.name === abilityName) {
//             this.activeAbility = ability;
//         }
//     }
// }

//     equipWeapon(weaponName) {
//         // if we have a pet in our this.pets array that matches the same in an argument to this function
//         // lets summon it
//         // we can loop over the pets we have to fin it
//         for (let i = 0; i < this.weapons.length; i++) {
//             const weapon = this.weapons[i]; // this pet is equal to an individual pet element in our pets array
//             if (weapon.name === weaponName) {
//                 this.activeWeapons = weapon;
//             }
//         }
//     }
// }

module.exports = Character;
},{"../abilities/ability":1,"../config/config":12}],8:[function(require,module,exports){
// Spells
const strike = require('../abilities/strike');
const Pet = require('./pet');
const startingPet = new Pet("Pet", 10);
// Abilities 
const cestus = require('../weapons/cestus');
// Warlock model
const Character = require('./character');


class Monk extends Character {
    constructor(name) {
        super(name, "monk", 100, 15, 15);
        this.activeAbility = strike;
        this.activeWeapon = cestus;

        this.image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3810965-d444-49fe-860e-ea51d4e13361/d55gxxv-d15db62c-31dc-4915-8f73-3299bee89ada.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzODEwOTY1LWQ0NDQtNDlmZS04NjBlLWVhNTFkNGUxMzM2MVwvZDU1Z3h4di1kMTVkYjYyYy0zMWRjLTQ5MTUtOGY3My0zMjk5YmVlODlhZGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J3n_vPVyQNvVD5bBtB_bziKHQzQ0ZDLtghaEeVQO_ok"
    }
}

module.exports = Monk;
},{"../abilities/strike":4,"../weapons/cestus":29,"./character":7,"./pet":9}],9:[function(require,module,exports){
class Pet {
    constructor(name, attack) {
        this.name = name;
        this.attack = attack;
    }
}

module.exports = Pet;
},{}],10:[function(require,module,exports){
// starting Pet
const Pet = require('./pet');
const startingPet = new Pet("Pet", 15);

// Spells
const fireball = require('../abilities/fireball');
const summonPet = require('../abilities/summonPet');

// Abilities 
const staff = require('../weapons/staff');
// Warlock model
const Character = require('./character');

class Warlock extends Character {
    constructor(name) {
        super(name, "warlock", 100, 5, 15);
        this.activeAbility = fireball;
        this.activeWeapon = staff;
        this.activePets.push(startingPet);
        this.image = "https://www.wowisclassic.com/media/CACHE/images/contents/1523/ea18a28c-90fd-42f2-a867-965d65867cdc/dd55a63f44bd004898a01bfdcab9cec2.png"
        // document.getElementById("warlockImage").src = this.image;
    }
}

module.exports = Warlock;
},{"../abilities/fireball":2,"../abilities/summonPet":5,"../weapons/staff":31,"./character":7,"./pet":9}],11:[function(require,module,exports){
const Bandit = require("./characters/bandit");
const Warlock = require("./characters/warlock");
const Monk = require("./characters/monk");

function chooseClass(x) {
    if (x === "bandit") {

        console.log("You've chosen Bandit! Here are your beginning stats:\n");

        character = new Bandit('myBandit')
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
},{"./characters/bandit":6,"./characters/monk":8,"./characters/warlock":10}],12:[function(require,module,exports){
const config = {
    classNames: {
        WarlockClassName: "warlock"
    }
}


module.exports = config;
},{}],13:[function(require,module,exports){
function displayCharacterInfo(character) {
    const container = document.getElementById("character-info");
    let characterInfoString = `Name: ${character.getName()}<br>`;
    characterInfoString += `Level: ${character.getLevel()} ${character.getClassName()}<br>`;
    characterInfoString += `${character.getStatsString()}`;
    container.innerHTML = characterInfoString;


    var selectedClassImage = character.image;
    const imageContainer = document.getElementById("selectedCharacterImage");
    imageContainer.src = selectedClassImage;

    const damageContainer = document.getElementById("damage-info");
    let damageInfoString = `Punch: ${character.getDamage("punch")}<br>`;
    damageInfoString += `Use Weapon: ${character.getDamage("weapon")}<br>`
    damageInfoString += `Use Ability: ${character.getDamage("ability")}<br>`
    damageInfoString += `Use Pets: ${character.getDamage("pets")}<br>`
    damageContainer.innerHTML = damageInfoString;
}

module.exports = displayCharacterInfo;
},{}],14:[function(require,module,exports){
const toggleMobInfoDisplay = require("./toggleMobInfoDisplay");

//display active mob info
function displayMobInfo(activeMob) {
    toggleMobInfoDisplay();
    const container = document.getElementById("mob-info");
    let mobInfoString = `Name: ${activeMob.getName()}<br>`;
    mobInfoString += `Health: ${activeMob.getHealth()}<br> Attack: ${activeMob.getAttack()}`;
    container.innerHTML = mobInfoString;

    console.log(activeMob.image)
    var activeMobImage = activeMob.image;
    const imageContainer = document.getElementById("activeMobImage");
    imageContainer.src = activeMobImage;
}

module.exports = displayMobInfo;
},{"./toggleMobInfoDisplay":25}],15:[function(require,module,exports){
function displayMoveChoice(moveChoice) {

    const container = document.getElementById("move-info");
    let moveInfoString = `Move: ${moveChoice}<br>`;
    container.innerHTML = moveInfoString;
}

module.exports = displayMoveChoice;
},{}],16:[function(require,module,exports){
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


},{"./characters/pet":9,"./chooseClass":11,"./config/config":12,"./displayCharacterInfo":13,"./displayMobInfo":14,"./displayMoveChoice":15,"./mobs/mobs":20,"./setActiveMob":22,"./toggleCharacterInfoDisplay":23,"./toggleFightButton":24,"./toggleMoveChoiceDisplay":26,"./toggleNextMobDisplay":27,"./waitForMovechoice":28}],17:[function(require,module,exports){
const Mob = require("./mob")
const dragon = new Mob("dragon", 20, 30);
dragon.image = "https://eldenring.wiki.fextralife.com/file/Elden-Ring/remembrance_of_the_lichdragon_elden_ring_wiki_guide_200px.png"
module.exports = dragon;
},{"./mob":19}],18:[function(require,module,exports){
const Mob = require("./mob")
const goblin = new Mob("goblin", 10, 10);
goblin.image = "https://toppng.com/uploads/preview/clash-of-clans-goblin-115494763627rf8cpiu9s.png"
module.exports = goblin;

// const goblinDEFAULT = { name: 'goblin', health: 10 };
// const resetToDefault = goblin => Object.assign(goblin, goblinDEFAULT);

// const goblin = { name: null, health: null };
// console.log(goblin);
// goblin.name = 'bingbong'; goblin.health = 7;
// console.log(goblin);
// resetToDefault(goblin);
// console.log(goblin);
},{"./mob":19}],19:[function(require,module,exports){
class Mob {
    constructor(name, attack, health) {
        this.name = name;
        this.attack = attack;
        this.health = health;
    }

    getName() {
        return this.name;
    }
    getHealth() {
        return this.health;
    }
    getAttack() {
        return this.attack;
    }
}


module.exports = Mob;
},{}],20:[function(require,module,exports){
const Goblin = require('./goblin');
const troll = require('./troll');
const dragon = require("./dragon");

const mobs = [Goblin, troll, dragon];

module.exports = mobs;
},{"./dragon":17,"./goblin":18,"./troll":21}],21:[function(require,module,exports){
const Mob = require("./mob")
const troll = new Mob("troll", 15, 15);
troll.image = "https://cdn.staticneo.com/w/fallout/thumb/Super_Mutant_Overlord.png/330px-Super_Mutant_Overlord.png"
module.exports = troll;
},{"./mob":19}],22:[function(require,module,exports){
const displayMobInfo = require("./displayMobInfo");
//setActiveMob takes a mob class and sets the active mob to it, and displays it
function setActiveMob(mob) {
    activeMob = mob;
    displayMobInfo(activeMob);
}

module.exports = setActiveMob;
},{"./displayMobInfo":14}],23:[function(require,module,exports){
function toggleCharacterInfoDisplay() {

    const infoContainer = document.getElementById("character-info-container");
    infoContainer.style.display = "Inline-block";
   
}

module.exports = toggleCharacterInfoDisplay;
},{}],24:[function(require,module,exports){
function toggleFightButton() {
    const container = document.getElementById("fightButton");
    if (container.disabled === false) {
        container.style.display = "Inline-block";
    } else if (container.disabled === true) {
        container.style.display = "none";
    }





}

module.exports = toggleFightButton;
},{}],25:[function(require,module,exports){
function toggleMobInfoDisplay() {

    const infoContainer = document.getElementById("mob-info-container");
    infoContainer.style.display = "Inline-block";

    const infoPicture = document.getElementById("activeMobImage");
    infoPicture.style.display = "Inline-block";

}

module.exports = toggleMobInfoDisplay;
},{}],26:[function(require,module,exports){
function toggleMoveChoiceDisplay() {
    const container = document.getElementById("move-select-container");
    container.style.display = "Inline-block";

}

module.exports = toggleMoveChoiceDisplay;
},{}],27:[function(require,module,exports){

function toggleNextMobDisplay() {
    const infoContainer = document.getElementById("nextMobButton");
    infoContainer.style.display = "Inline-block";
    
}

module.exports = toggleNextMobDisplay;
},{}],28:[function(require,module,exports){
const displayMobInfo = require("./displayMobInfo");
const displayMoveChoice = require("./displayMoveChoice");


function waitForMoveChoice() {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("move-select")) {
            const moveChoice = event.target.id;
            console.log(moveChoice);
            return moveChoice;
        } else {
            console.log("Not a character move")
        }

    })

}


module.exports = waitForMoveChoice;
},{"./displayMobInfo":14,"./displayMoveChoice":15}],29:[function(require,module,exports){
const Weapon = require('./weapon');

const Cestus = new Weapon('cestus', 10);

module.exports = Cestus;
},{"./weapon":32}],30:[function(require,module,exports){
const Weapon = require('./weapon');

const Dagger = new Weapon('dagger', 13);

module.exports = Dagger;
},{"./weapon":32}],31:[function(require,module,exports){
const Weapon = require('./weapon');

const Staff = new Weapon('staff', 10);

module.exports = Staff;
},{"./weapon":32}],32:[function(require,module,exports){
class Weapon {
    constructor(name, attack) {
        this.name = name;
        this.attack = attack;
    }
}

module.exports = Weapon;
},{}]},{},[16]);
