const toggleMobInfoDisplay = require("./toggleMobInfoDisplay");

//display active mob info
function displayMobInfo(activeMob) {
    toggleMobInfoDisplay();
    const container = document.getElementById("mob-info");
    let mobInfoString = `Name: ${activeMob.getName()}<br>`;
    mobInfoString += `Health: ${activeMob.getHealth()}<br> Attack: ${activeMob.getAttack()}`;
    container.innerHTML = mobInfoString;

    console.log(activeMob.image)
    var activeMobImage = activeMob.image;
    const imageContainer = document.getElementById("activeMobImage");
    imageContainer.src = activeMobImage;
}

module.exports = displayMobInfo;