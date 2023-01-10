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
        super(name, "monk", 100, 5, 15);
        this.activeAbility = strike;
        this.activeWeapon = cestus;
        this.activePets.push(startingPet);
    }
}

module.exports = Monk;