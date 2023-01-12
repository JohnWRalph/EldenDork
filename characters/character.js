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