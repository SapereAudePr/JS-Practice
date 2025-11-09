const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;

const SELECTION_OPTIONS = [ROCK, PAPER, SCISSORS];

const getPlayerChoice = function () {
    const userInput = prompt(`What is your choice: ${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();

    if (SELECTION_OPTIONS.includes(userInput)) {
        alert(`${userInput} is selected!`);
    } else {
        alert(`"${userInput}" is not a valid choice!   ` + `"${DEFAULT_SELECTION}" is selected by default!`);
        return DEFAULT_SELECTION;
    }
    return userInput;
}

startGameBtn.addEventListener(`click`, function () {
    console.log("Starting game...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});