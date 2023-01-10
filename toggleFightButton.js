function toggleFightButton() {
    const container = document.getElementById("fightButton");
    if (container.disabled === false) {
        container.style.display = "Inline-block";
    } else if (container.disabled === true) {
        container.style.display = "none";
    }





}

module.exports = toggleFightButton;