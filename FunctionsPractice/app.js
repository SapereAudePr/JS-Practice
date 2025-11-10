`use strict`;
const startGameBtn = document.getElementById('start-game-btn');

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_SELECTION = ROCK;
const SELECTION_OPTIONS = [ROCK, PAPER, SCISSORS];
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";


let isGameRunning = false;

const getPlayerChoice = () => {
    const userInput = prompt(`What is your choice: ${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();

    const isChoiceCorrect = {
        correct: () => {
            alert(`${userInput} is selected!`);
            return userInput;
        },
        wrong: () => {
            alert(`"${userInput}" is not a valid choice! ` + `"${DEFAULT_SELECTION}" is selected by default!`);
            return DEFAULT_SELECTION;
        }
    }

    const userChoice = SELECTION_OPTIONS.includes(userInput);
    return userChoice ? isChoiceCorrect.correct() : isChoiceCorrect.wrong();
}

const getComputerChoice = () => {
    const rndNumber = Math.random();

    return rndNumber < 1 / 3 ? ROCK : rndNumber < 2 / 3 ? PAPER : SCISSORS;
}

const determineWinner = (playerChoice, computerChoice) => {
    return playerChoice === computerChoice ? RESULT_DRAW :
        playerChoice === PAPER && computerChoice === ROCK || playerChoice === SCISSORS && computerChoice === PAPER || playerChoice === ROCK && computerChoice === SCISSORS ?
            RESULT_PLAYER_WIN :
            RESULT_COMPUTER_WIN;
}

startGameBtn.addEventListener(`click`, () => {
    if (isGameRunning) {
        alert(`Game is already running!`);
        return;
    }
    isGameRunning = true;
    console.log("Starting game...");
    const playerSelection = getPlayerChoice();
    console.log(`Player's selection:  ${playerSelection}`);
    const computerSelection = getComputerChoice();
    console.log(`Computer's selection:  ${computerSelection}`);
    const winner = determineWinner(playerSelection, computerSelection);
    console.log(winner);
    isGameRunning = false;
});