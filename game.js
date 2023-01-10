// Require packages here
const prompt = require("prompt-promise");

// Require all abilities here
const Ability = require('./abilities/ability');
const Fireball = require('./abilities/fireball');


// Require all weapons here
const staff = require('./weapons/staff');

// Require all classes here
const Characters = require('./characters/classes');
const Pet = require('./characters/pet');
const Warlock = require('./characters/warlock');
const Bandit = require('./characters/bandit');
const Monk = require('./characters/monk')
const mobs = require('./mobs/mobs');
const goblin = require("./mobs/goblin");
const troll = require("./mobs/troll");
// const goblin = require("./mobs/goblin");
// const Yahuu = new Warlock('Yahuuu')
// console.log(Yahuu.characterIdentifier);
async function fight(character, mobtype) {
    console.log("A wild", mobtype.name, "appears!");
    console.log("The", mobtype.name, "has", mobtype.attack, "damage and", mobtype.health, "health.\n");
    while (mobtype.health > 0 && character.health > 0) {
        console.log("What action would you like to take?")
        const actionChoice = await prompt("Choose a number to select your action: \n[1]: Punch \n[2]: Use Weapon \n[3]: Use Ability \n[4]: Use Pets \n");
        if (actionChoice === '1') {
            mobtype.health = mobtype.health - character.attack;
            character.health = character.health - mobtype.attack;
            console.log("You dealt", character.attack, "damage to", mobtype.name, "leaving it with", mobtype.health, "health.");
            console.log(mobtype.name, "dealt", mobtype.attack, "damage to you, leaving you with", character.health, "health.\n");

            // console.log("You have", character.health, "health.");
            // console.log("The", mobtype.name, "has", mobtype.health, "health.");

        } else if (actionChoice === '2') {
            // console.log(character.activeWeapon);
            const weaponDamage = character.activeWeapon.attack * character.attack / 10;
            mobtype.health = mobtype.health - weaponDamage;
            character.health = character.health - mobtype.attack;
            console.log("You dealt", weaponDamage, "damage to", mobtype.name, "leaving it with", mobtype.health, "health.");
            console.log(mobtype.name, "dealt", mobtype.attack, "damage to you, leaving you with", character.health, "health.\n");

        } else if (actionChoice === '3') {

            const abilityDamage = character.activeAbility.attack * character.magic / 10;
            mobtype.health = mobtype.health - abilityDamage;
            character.health = character.health - mobtype.attack;
            console.log("You dealt", abilityDamage, "damage to", mobtype.name, "leaving it with", mobtype.health, "health.");
            console.log(mobtype.name, "dealt", mobtype.attack, "damage to you, leaving you with", character.health, "health.\n");
        } else if (actionChoice === '4') {
            const petDamage = character.activePets[0].attack;
            mobtype.health = mobtype.health - petDamage;
            character.health = character.health - mobtype.attack;
            console.log("You dealt", petDamage, "damage to", mobtype.name, "leaving it with", mobtype.health, "health.");
            console.log(mobtype.name, "dealt", mobtype.attack, "damage to you, leaving you with", character.health, "health.\n");
        }
        else (
            console.log("You selected an option that is not available. Try again.")
        )
    }
    if (character.health > mobtype.health && character.health > 0) {
        console.log("YOU DEFEATED THE", mobtype.name, "!\n");
        character.levelUp();
        console.log("You've leveled up to", character.level, "!");
        console.log("Your new stats:")
        console.log(character);
        if (mobs[mobs.length - 1].health <= 0) {
            console.log("VICTORY! THE DRAGON HAS BEED DEFEATED AND YOU HAVE BECOME THE ELDEN DORK!")
        } else {
            const cont = await prompt('Press any button to continue onto the next mob.\n');
        }
    } else if (mobtype.health > character.health) {
        console.log("You died. Better luck next time...")
    } else {
        console.log("You killed the", mobtype.name, "yet it killed you at the same time. Better luck next time...")
    }

}
// gameLoop will start and run our game, initializing everything it needs
// to spawn an instance of our game.
// we want to prompt the user to make decisions, so we need to use a prompting library

async function gameLoop() {
    // in my game loop, at the start, i want to get the class choice from the user
    // they can pick gambler, warlock, or medic

    //I'm going to store my character in this variable, once I pick a character,
    // i will create that class and put it in the character variable
    let character;
    let mob = mobs[0];
    console.log("THE MOBS YOU MUST DEFEAT:")
    console.log(mobs);
    let mobCount = 0;

    const classChoice = await prompt("\nChoose a number to select your class: \n[1]: warlock: \n[2]: Bandit \n[3]: Monk\n");
    if (classChoice === '1') {
        console.log("You've chosen Warlock! Here are your beginning stats:\n");
        character = new Warlock('myWarlock')
        console.log(character, "\n");

    } else if (classChoice === '2') {
        console.log("You've chosen Warlock! Here are your beginning stats");
        character = new Bandit('myBandit')
        console.log(character, "\n");
    } else if (classChoice === '3') {
        console.log("You've chosen Monk! Here are your beginning stats");
        character = new Monk('myMonk')
        console.log(character, "\n");
    } else {
        throw Error("Not a number");
    }

    for (i = 0; i < mobs.length; i++) {
        await fight(character, mobs[i]);
    }
}

console.log("WELCOME TO MY GAME!");
console.log("-----------------------------------------------------");
console.log("FOLLOW THE PROMPTS IN ORDER TO PICK A CLASS AND FIGHT THROUGH A SERIES OF MOBS!!!\n")
gameLoop();
