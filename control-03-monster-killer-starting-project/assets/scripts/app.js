const MAX_PLAYER_ATTACK_VALUE = 10;
const MAX_MONSTER_ATTACK_VALUE = 15;
const MAX_PLAYER_STRONG_ATTACK_VALUE = 17;
const MAX_PLAYER_HEAL_VALUE = 35;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;


adjustHealthBars(chosenMaxLife);

function endRound() {
    const monsterDamage = dealPlayerDamage(MAX_MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;

    // if (currentPlayerHealth <= 0 && hasBonusLife) {
    //     hasBonusLife = false;
    //     const cappedMaxLifeValue = Math.floor(Math.random() * 60);
    //     setPlayerHealth(cappedMaxLifeValue);
    // }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You Won!")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert("You Lose!")
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("Draw!")
    }
}

function attackMonster(mode) {
    let maxDamage;
    if (mode === "NORMAL_ATTACK") {
        maxDamage = MAX_PLAYER_ATTACK_VALUE;
    } else if (mode === "STRONG_ATTACK") {
        maxDamage = MAX_PLAYER_STRONG_ATTACK_VALUE;
    }

    const playerDamage = dealMonsterDamage(maxDamage);
    currentMonsterHealth -= playerDamage;
    endRound();
}

function attackHandler() {
    attackMonster("NORMAL_ATTACK");
}

function strongAttackHandler() {
    attackMonster("STRONG_ATTACK");
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

    endRound();
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener(`click`, strongAttackHandler)
healBtn.addEventListener(`click`, healPlayerHandler)