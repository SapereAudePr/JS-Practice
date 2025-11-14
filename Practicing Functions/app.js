const addBtn = document.getElementById('add-btn');
const subtractBtn = document.getElementById('subtract-btn');
const multiplyBtn = document.getElementById('multiply-btn');
const divideBtn = document.getElementById('divide-btn');

const logList = [];


const calculator = (operator, ...args) => {
    const toNum = x => typeof x === 'number' && !Number.isNaN(x) ? x : 0;

    let result = toNum(args[0]);

    for (let i = 1; i < args.length; i++) {
        const value = toNum(args[i]);

        switch (operator) {
            case '+':
                result += value;
                break;
            case '-':
                result -= value;
                break;
            case '*':
                result *= value;
                break;
            case '/':
                result /= value;
                break;

            default:
                throw new Error(`${operator} is not defined`);

        }
    logList.push(result);
    }
    return result;
}


addBtn.addEventListener(`click`, () => {
    calculator(`+`, 700, 700, 700, 2000);
    console.log(logList);
});

subtractBtn.addEventListener(`click`, () => {
    calculator(`-`, 5000, 250);
    console.log(logList);
});

multiplyBtn.addEventListener(`click`, () => {
    calculator(`*`, 100, 300);
    console.log(logList);
});

divideBtn.addEventListener(`click`, () => {
    calculator(`/`, 200, 3);
    console.log(logList);
});



