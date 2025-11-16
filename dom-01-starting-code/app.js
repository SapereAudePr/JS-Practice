// const listItemElements = document.querySelectorAll('li');

const lisItemElements = document.getElementsByTagName('li');
// const lisItemIndex = lisItemElements[0];
// lisItemIndex.textContent = 'Item99';

const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + `(999)`;

const li2 = document.querySelector('ul li:nth-child(2)');
li2.textContent =  `ItemTEsst`


for (const lisItem of lisItemElements) {
    if (lisItem.textContent === `Item1`) lisItem.textContent = `Item99`;
    console.dir(lisItem);
}