const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;

const getPlayerChoice = function () {
    const selection = prompt(`What is your choice: ${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();
    if (selection !== ROCK &&
        selection !== PAPER &&
        selection !== SCISSORS) {
        alert(`Invalid choice, ${DEFAULT_SELECTION} is selected for default!`);
        return DEFAULT_SELECTION;
    } else {
        alert(`${selection} is selected!`);
    }
    return selection;
}

startGameBtn.addEventListener(`click`, function () {
    console.log("Starting game...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});