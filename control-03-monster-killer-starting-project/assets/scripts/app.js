const MAX_PLAYER_ATTACK_VALUE = 10;
const MAX_MONSTER_ATTACK_VALUE = 15;
const MAX_PLAYER_STRONG_ATTACK_VALUE = 17;
const MAX_PLAYER_HEAL_VALUE = 35;

const MODE_NORMAL_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";

const LOG_NORMAL_PLAYER_ATTACK = "NORMAL_PLAYER_ATTACK"
const LOG_STRONG_PLAYER_ATTACK = "STRONG_PLAYER_ATTACK"
const LOG_MONSTER_ATTACK = "MONSTER_ATTACK"
const LOG_PLAYER_HEAL_VALUE = "PLAYER_HEAL_VALUE"
const LOG_GAME_OVER = "GAME_OVER"

const enteredLifeValue = prompt("Set Max Player & Monster Health", "100");

let chosenMaxLife = parseInt(enteredLifeValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    alert("Value has to be greater than 0 and a number");
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

let eventLog = [];

adjustHealthBars(chosenMaxLife);

function endRound() {
    const initialPlayerHealth = currentPlayerHealth;
    const monsterDamage = dealPlayerDamage(MAX_MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;

    writeToLog(LOG_MONSTER_ATTACK, monsterDamage, currentMonsterHealth, currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(initialPlayerHealth);
        alert("Bonus Life Used!");
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        writeToLog(LOG_GAME_OVER, "Player Won", currentMonsterHealth, currentPlayerHealth);
        alert("You Won!")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        writeToLog(LOG_GAME_OVER, "Monster Won", currentMonsterHealth, currentPlayerHealth);
        alert("You Lose!")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        writeToLog(LOG_GAME_OVER, "Draw!", currentMonsterHealth, currentPlayerHealth);
        alert("Draw!")
    }

    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        resetGameHandler();
    }
}

function attackMonster(mode) {
    let maxDamage;
    let logEvent;
    if (mode === MODE_NORMAL_ATTACK) {
        maxDamage = MAX_PLAYER_ATTACK_VALUE;
        logEvent = LOG_NORMAL_PLAYER_ATTACK;
    } else if (mode === MODE_STRONG_ATTACK) {
        maxDamage = MAX_PLAYER_STRONG_ATTACK_VALUE;
        logEvent = LOG_STRONG_PLAYER_ATTACK;
    }

    const playerDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= playerDamage;

    writeToLog(logEvent, playerDamage, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function attackHandler() {
    attackMonster(MODE_NORMAL_ATTACK);
}

function strongAttackHandler() {
    attackMonster(MODE_STRONG_ATTACK);
}

function healPlayerHandler() {
    let healValue;
    if (currentPlayerHealth >= chosenMaxLife - MAX_PLAYER_HEAL_VALUE) {
        healValue = chosenMaxLife - currentPlayerHealth;
    } else {
        healValue = MAX_PLAYER_HEAL_VALUE;
    }
    const playerHeal = increasePlayerHealth(healValue);
    currentPlayerHealth += playerHeal;

    writeToLog(LOG_PLAYER_HEAL_VALUE, playerHeal, currentMonsterHealth, currentPlayerHealth);

    endRound();
}

function resetGameHandler() {
    if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
        currentMonsterHealth = chosenMaxLife;
        currentPlayerHealth = chosenMaxLife;
        resetGame(chosenMaxLife);
    }
}

function writeToLog(ev, val, monsterHealth, playerHealth) {
    let logEntry;
    if (ev === LOG_NORMAL_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (LOG_STRONG_PLAYER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "MONSTER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (LOG_PLAYER_HEAL_VALUE) {
        logEntry = {
            event: ev,
            value: val,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }

    } else if (LOG_MONSTER_ATTACK) {
        logEntry = {
            event: ev,
            value: val,
            target: "PLAYER",
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    } else if (LOG_GAME_OVER) {
        logEntry = {
            event: ev,
            value: val,
            finalMonsterHealth: monsterHealth,
            finalPlayerHealth: playerHealth
        }
    }
    eventLog.push(logEntry);
}

function printLogHandler() {
    console.log(eventLog);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener(`click`, strongAttackHandler)
healBtn.addEventListener(`click`, healPlayerHandler)
logBtn.addEventListener(`click`, printLogHandler)