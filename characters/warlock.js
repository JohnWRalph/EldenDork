// starting Pet
const Pet = require('./pet');
const startingPet = new Pet("Pet", 10);

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
    }
}

module.exports = Warlock;