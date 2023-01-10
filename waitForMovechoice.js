const displayMobInfo = require("./displayMobInfo");
const displayMoveChoice = require("./displayMoveChoice");


function waitForMoveChoice() {
    document.addEventListener("click", function (event) {
        if (event.target.classList.contains("move-select")) {
            const moveChoice = event.target.id;
            console.log(moveChoice);
            return moveChoice;
        } else {
            console.log("Not a character move")
        }

    })

}


module.exports = waitForMoveChoice;