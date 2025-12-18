

class Element {
    constructor() {

    }

    createStyle() {
        const style = document.createElement('style');
        style.innerHTML = `
section {
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
margin-top: 25rem;
}

.color-buttons {
width: 150px;
height: 150px;
border-radius: 50%;
border: none;
margin: 5px;
}

ul {
list-style-type: none;
}

p {
font-family: sans-serif;
font-size: 50px;
}
`
        document.head.append(style);
        this.createElement();
    }

    createElement() {
        const sectionEl = document.createElement('section');
        document.body.append(sectionEl);
        const divEl = document.createElement('div');
        divEl.id = 'divId';
        sectionEl.append(divEl);
    }
}

class Button {
    constructor() {

    }

    changePColor(color) {
        const text = document.querySelector(`p`);
        text.style.color = color.color2;
    }

    changeBgColor(color) {
        document.body.style.background = color.color1;
        this.changePColor(color);
    }

    createButton(theme) {
        const text = document.createElement(`p`)
        text.textContent = `Click me!`

        const divEl = document.getElementById(`divId`)
        divEl.append(text);

        theme.forEach((color1, color2) => {
            const button = document.createElement("button");
            button.className = `color-buttons`

            button.style.backgroundColor = color1.color1;
            text.style.backgroundColor = color2.color2;

            const divEl = document.getElementById(`divId`);
            divEl.append(button);

            button.addEventListener("click", () => {
                this.changeBgColor(color1);
            })
        })
    }


}

class Theme {
    constructor(theme, buttonInstance) {
        this.theme = [];
        this.buttonInstance = buttonInstance;
    }

    createTheme(theme) {
        this.theme.push(theme);
        this.buttonInstance.createButton(theme);
    }
}


class App {
    constructor() {
        const element = new Element();
        this.element = element;

        const button = new Button();
        const themes =
            [{color1: `black`, color2: `white`},
                {color1: `white`, color2: `black`},
                {color1: `red`, color2: `white`},
            ];

        this.themes = themes;

        const theme = new Theme(themes, button);
        this.theme = theme;


    }

    run() {
        this.element.createStyle();
        this.theme.createTheme(this.themes)
    }
}

const app = new App();
app.run();