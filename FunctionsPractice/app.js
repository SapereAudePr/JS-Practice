const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;

const SELECTION_OPTIONS = [ROCK, PAPER, SCISSORS];

const getPlayerChoice = function () {
    const userInput = prompt(`What is your choice: ${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();

    const isChoiceCorrect = {
        correct: function () {
            alert(`${userInput} is selected!`);
            return userInput;
        },
        wrong: function () {
            alert(`"${userInput}" is not a valid choice!   ` + `"${DEFAULT_SELECTION}" is selected by default!`);
            return DEFAULT_SELECTION;
        }
    }

    const userChoice = SELECTION_OPTIONS.includes(userInput);
    return userChoice ? isChoiceCorrect.correct() : isChoiceCorrect.wrong();
}

startGameBtn.addEventListener(`click`, function () {
    console.log("Starting game...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});