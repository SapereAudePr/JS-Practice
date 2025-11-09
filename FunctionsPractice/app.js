const startGameBtn = document.getElementById('start-game-btn');

const testGreetBtn = document.getElementById(`test-greet-btn`);

const testEndBtn = document.getElementById(`test-end-btn`);

function startGame() {
    alert(`Game starting!`);
    console.log(alert);
}

const testFnc = {
    greet: function(){
        alert(`Greeting`);
        console.log(`Greeting!`);
    },
    end: function(){
        alert(`Ending!`);
        console.log(`Ending!`);
    }
}



startGameBtn.addEventListener('click', startGame);
testGreetBtn.addEventListener('click', function (){
    alert(`Greeting!`);
    console.log(`Greeting!`);
});
testEndBtn.addEventListener('click', testFnc.end);