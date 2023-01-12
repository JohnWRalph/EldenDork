function toggleMobInfoDisplay() {

    const infoContainer = document.getElementById("mob-info-container");
    infoContainer.style.display = "Inline-block";

    const infoPicture = document.getElementById("activeMobImage");
    infoPicture.style.display = "Inline-block";

}

module.exports = toggleMobInfoDisplay;