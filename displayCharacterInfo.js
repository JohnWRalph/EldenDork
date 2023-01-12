function displayCharacterInfo(character) {
    const container = document.getElementById("character-info");
    let characterInfoString = `Name: ${character.getName()}<br>`;
    characterInfoString += `Level: ${character.getLevel()} ${character.getClassName()}<br>`;
    characterInfoString += `${character.getStatsString()}`;
    container.innerHTML = characterInfoString;


    var selectedClassImage = character.image;
    const imageContainer = document.getElementById("selectedCharacterImage");
    imageContainer.src = selectedClassImage;

    const damageContainer = document.getElementById("damage-info");
    let damageInfoString = `Punch: ${character.getDamage("punch")}<br>`;
    damageInfoString += `Use Weapon: ${character.getDamage("weapon")}<br>`
    damageInfoString += `Use Ability: ${character.getDamage("ability")}<br>`
    damageInfoString += `Use Pets: ${character.getDamage("pets")}<br>`
    damageContainer.innerHTML = damageInfoString;
}

module.exports = displayCharacterInfo;