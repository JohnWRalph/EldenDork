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