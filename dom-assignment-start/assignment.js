const firstTaskID = document.getElementById("task-1");
const firstTaskQuery = document.querySelector(`ol li:first-of-type`);

firstTaskID.style.backgroundColor = `black`;
firstTaskQuery.style.color = `white`;


const secondTask1 = document.getElementsByTagName(`title`)
secondTask1[0].textContent = `Assignment - Solved!`;

const secondTask2 = document.head.querySelector(`title`);
secondTask2.textContent = `Assignment - Solved!`;

const thirdTask = document.querySelector(`h1`);
thirdTask.textContent = `Assignment - Solved!`;

