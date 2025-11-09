const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    alert(`Game starting!`);
    console.log(startGameBtn);
}

startGameBtn.addEventListener('click', startGame);