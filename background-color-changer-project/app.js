const style = document.createElement('style');
style.innerHTML = `
.color-buttons {
width: 100px;
height: 100px;
padding: 10px 20px;
margin: 5px;
border: none;
border-radius: 50%;
cursor: pointer;
transition: box-shadow 0.5s;
}

.color-buttons:hover {
opacity: 0.8;
border: 2px solid gray;
transition: box-shadow 0.5s;

}

ul {
list-style-type: none;
align-items: center;
justify-content: center;
display: flex;
margin: 20% auto;
}
`

document.head.appendChild(style);


const colorChanger = (color) => {
    document.body.style.backgroundColor = color;
}

const blackBtn = document.createElement('button');
blackBtn.className = `color-buttons`;
blackBtn.style.backgroundColor = 'black';
blackBtn.addEventListener('click', () => {
    colorChanger('black');
})
const redBtn = document.createElement('button');
redBtn.className = `color-buttons`;
redBtn.style.backgroundColor = 'red';
redBtn.addEventListener('click', () => {
    colorChanger(`red`)
})
const whiteBtn = document.createElement('button');
whiteBtn.className = `color-buttons`;
whiteBtn.style.backgroundColor = 'white';
whiteBtn.addEventListener('click', () => {
    colorChanger(`white`);
})

const sectionEl = document.createElement("section");
document.body.append(sectionEl);
const divEl = document.createElement("div");
sectionEl.append(divEl);

const ulEl = document.createElement("ul");
divEl.append(ulEl);

ulEl.append(blackBtn);
ulEl.append(redBtn);
ulEl.append(whiteBtn);
