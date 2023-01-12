const Mob = require("./mob")
const goblin = new Mob("goblin", 10, 10);
goblin.image = "https://iili.io/HYqFvoX.png"
module.exports = goblin;

// const goblinDEFAULT = { name: 'goblin', health: 10 };
// const resetToDefault = goblin => Object.assign(goblin, goblinDEFAULT);

// const goblin = { name: null, health: null };
// console.log(goblin);
// goblin.name = 'bingbong'; goblin.health = 7;
// console.log(goblin);
// resetToDefault(goblin);
// console.log(goblin);