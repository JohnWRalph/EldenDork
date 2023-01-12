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