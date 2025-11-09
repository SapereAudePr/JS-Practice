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

const getPlayerChoice = function () {
    const userInput = prompt(`What is your choice: ${ROCK}, ${PAPER} or ${SCISSORS}`, "").toUpperCase();

    const isChoiceCorrect = {
        correct: function () {
            alert(`${userInput} is selected!`);
            return userInput;
        },
        wrong: function () {
            alert(`"${userInput}" is not a valid choice! ` + `"${DEFAULT_SELECTION}" is selected by default!`);
            return DEFAULT_SELECTION;
        }
    }

    const userChoice = SELECTION_OPTIONS.includes(userInput);
    return userChoice ? isChoiceCorrect.correct() : isChoiceCorrect.wrong();
}

const getComputerChoice = function () {
    const rndNumber = Math.random();

    if (rndNumber < 0.34) {
        return ROCK;
    } else if (rndNumber < 0.67) {
        return PAPER;
    } else {
        return SCISSORS;
    }
}

const determineWinner = function (playerChoice, computerChoice) {
    if (!isGameRunning) return;

    if (playerChoice === computerChoice) {
        return RESULT_DRAW;
    } else if (playerChoice === PAPER && computerChoice === ROCK || playerChoice === SCISSORS && computerChoice === PAPER || playerChoice === ROCK && computerChoice === SCISSORS) {
        return RESULT_PLAYER_WIN;
    } else {
        return RESULT_COMPUTER_WIN;
    }
}


startGameBtn.addEventListener(`click`, function () {
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
});