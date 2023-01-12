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