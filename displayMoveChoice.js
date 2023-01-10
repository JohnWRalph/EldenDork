function displayMoveChoice(moveChoice) {

    const container = document.getElementById("move-info");
    let moveInfoString = `Move: ${moveChoice}<br>`;
    container.innerHTML = moveInfoString;
}

module.exports = displayMoveChoice;