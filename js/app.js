
// Computer Player
const computerPlayer = () => {
    
}

// Human Player
const humanPlayer = () => {
    // boolean for conditional statements
    const playerButtonTemp = true;
    const drawOneMore = true;
    const playerButton = document.querySelector("#playerButton");
    let humanPlayerAction = humanPlayerMovements();

    playerButton.onclick = () => {
        if (playerButtonTemp === false) {
            throw err;
        }
        else {
            humanPlayerAction.flexButtons();
            humanPlayerAction.toggleButtonCard();
            humanPlayerAction.drawTwoRandomNumCards();
            humanPlayerAction.sumOfTwoCards();
            playerButton.innerHTML = "Draw Last Card";
            if (drawOneMore === true) {
                thirdBox.innerHTML = "?";
                playerButton.onclick = () => {
                    humanPlayerAction.toggleStopButton();
                    humanPlayerAction.lastDrawCard();
                    humanPlayerAction.sumOfAllCards();
                    playerButton.innerHTML = "Try again?"
                    playerButton.onclick = () => {
                        humanPlayerAction.resetCards();
                        humanPlayer();
                        playerButton.innerHTML = "Draw Two Cards";
                    }
                }
            }
            else {
                throw err;
            }

        }
    }
}
humanPlayerMovements = () => {
    const firstBox = document.querySelector("#firstBox");
    const secondBox = document.querySelector("#secondBox");
    const thirdBox = document.querySelector("#thirdBox");
    const currentScore = document.querySelector("#cardScore");
    const toggleBtn = document.querySelector("#callCardBtn");
    const toggleButtonStop = document.querySelector("#stopBtnCard");
    const flexChoiceBtns = document.querySelector("#btnContainer");
    let firstRandomNumber = null;
    let secondRandomNumber = null;
    let thirdRandomNumber = null;
    return {
        // Drawing the first two Cards...
        drawTwoRandomNumCards: () => {
            firstRandomNumber = Math.floor(Math.random() * 10) + 1;
            secondRandomNumber = Math.floor(Math.random() * 10) + 1;
            firstBox.innerHTML = firstRandomNumber;
            secondBox.innerHTML = secondRandomNumber;
        },
        // Draw the last card...
        lastDrawCard: () => {
            thirdRandomNumber = Math.floor(Math.random() * 10) + 1;
            thirdBox.innerHTML = thirdRandomNumber;
        },
        // get the total of the two cards...
        sumOfTwoCards: () => {
            let totalOfTwoCards = firstRandomNumber + secondRandomNumber;
            currentScore.innerHTML = totalOfTwoCards;
        },
        // get the total of all cards...
        sumOfAllCards: () => {
            let sumOfAllCard = firstRandomNumber + secondRandomNumber + thirdRandomNumber;
            currentScore.innerHTML = sumOfAllCard;
        },
        flexButtons: () => {
            flexChoiceBtns.classList.toggle("flexBtnCards", true);
        },
        // toggle button for 'Call Cards'
        toggleButtonCard: () => {
            toggleBtn.style.display = "block";
        },
        // toggle button for 'Stop/Give Up' Card.
        toggleStopButton: () => {
            toggleBtn.style.display = "none";
            toggleButtonStop.style.display = "block";
        },
        // Function to reset the Cards..
        resetCards: () => {
            firstBox.innerHTML = "?";
            secondBox.innerHTML = "?";
            thirdBox.innerHTML = "?";
            currentScore.innerHTML = "?";
            document.getElementById("stopBtnCard").removeAttribute("style");
            flexChoiceBtns.classList.toggle("flexBtnCards", false);
        }

    }
}


humanPlayer();

