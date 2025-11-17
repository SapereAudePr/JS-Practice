const button = document.querySelector('button');

const section = document.querySelector('section');

const li = document.querySelectorAll('li');

const ul = document.querySelector('ul');

for (let i = 0; i < li.length; i++) {
    if (li[i].firstElementChild !== ``) {
        li[i].textContent = `ItemChanged`;
    }

    li[i].insertAdjacentHTML('afterbegin', `<li>ItemTest</li>`);
}

const newLi = document.createElement('li');

ul.appendChild(newLi);

newLi.textContent = `AppendedChild`;

section.className = `yellow-bg`;

button.addEventListener('click', e => {
    // if (section.className === 'yellow-bg visible') {
    //     section.className = 'yellow-bg invisible';
    // } else {
    //     section.className = 'yellow-bg visible';
    // }
    section.insertAdjacentHTML('beforeend', '<h1>Item4</h1>');
    if (section.className === 'yellow-bg') {
    section.className = 'green-bg';
    } else if (section.className === 'green-bg') {
        section.className = ('yellow-bg');
    }
});
