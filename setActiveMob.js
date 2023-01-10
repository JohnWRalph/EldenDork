const displayMobInfo = require("./displayMobInfo");
//setActiveMob takes a mob class and sets the active mob to it, and displays it
function setActiveMob(mob) {
    activeMob = mob;
    displayMobInfo(activeMob);
}

module.exports = setActiveMob;