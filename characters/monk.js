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
        this.activePets.push(startingPet);
        this.image = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f3810965-d444-49fe-860e-ea51d4e13361/d55gxxv-d15db62c-31dc-4915-8f73-3299bee89ada.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YzODEwOTY1LWQ0NDQtNDlmZS04NjBlLWVhNTFkNGUxMzM2MVwvZDU1Z3h4di1kMTVkYjYyYy0zMWRjLTQ5MTUtOGY3My0zMjk5YmVlODlhZGEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.J3n_vPVyQNvVD5bBtB_bziKHQzQ0ZDLtghaEeVQO_ok"
    }
}

module.exports = Monk;