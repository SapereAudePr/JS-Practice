const modalActions = document.querySelector('.modal__actions');

const modalActionCancelBtn = modalActions.querySelector('.btn--passive');
const modalActionAddBtn = modalActions.querySelector('.btn--success');

const addModal = document.getElementById('add-modal');

const startAddBtn = document.querySelector('header button');

const backDrop = document.body.firstElementChild;

const userInputs = addModal.querySelectorAll('input');

const section = document.querySelector('#entry-text');

const movies = [];


const updateUI = () => section.classList.toggle(`invisible`, movies.length > 0);




const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    addModal.classList.toggle('visible');
    toggleBackDrop();
    clearMovieInputs();
}

const toggleCancelModalHandler = () => {
    toggleMovieModal();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter a valid input');

    }

    const newMovie = {
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue,
    }

    movies.push(newMovie);
    console.log(movies);
    toggleMovieModal();
    updateUI();
}

const clearMovieInputs = () => {
    for (const input of userInputs) {
        input.value = '';
    }
}

startAddBtn.addEventListener('click', toggleMovieModal);
backDrop.addEventListener('click', toggleCancelModalHandler);
modalActionCancelBtn.addEventListener('click', toggleCancelModalHandler);
modalActionAddBtn.addEventListener(`click`, addMovieHandler)