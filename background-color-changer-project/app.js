const style = document.createElement('style');
style.innerHTML = `

section {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 20%;
}

.color-buttons {
width: 100px;
height: 100px;
padding: 10px 20px;
margin: 10px;
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
display: flex;
padding: 0;
margin-top: 20px;
}

p {
font-size: 30px;
font-family: monospace;
margin: 0;
}
`
document.head.appendChild(style);

const sectionEl = document.createElement("section");
document.body.append(sectionEl);

const p = document.createElement("p");
p.textContent = 'Click Me!';

sectionEl.append(p);

const divEl = document.createElement("div");
sectionEl.append(divEl);

const ulEl = document.createElement("ul");
divEl.append(ulEl);

const pColorChanger = colour => {
    p.style.color = colour;
}

const colorChanger = (bgColour, pColour) => {
    document.body.style.backgroundColor = bgColour;
    pColorChanger(pColour);
}

const themes = [
    {name: `black`, text: `white`},
    {name: `red`, text: `white`},
    {name: `white`, text: `black`},
    {name: `green`, text: `black`},
]

themes.forEach(theme => {
    const btn = document.createElement('button');
    btn.className = `color-buttons`;
    btn.style.backgroundColor = theme.name;

    btn.addEventListener('click', () => {
        colorChanger(theme.name, theme.text);
    });

    ulEl.appendChild(btn);
});


