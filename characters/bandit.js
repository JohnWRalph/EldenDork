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
    }
}

module.exports = Bandit;