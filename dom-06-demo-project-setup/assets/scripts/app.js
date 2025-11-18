const addModal = document.getElementById('add-modal');

const startAddBtn = document.querySelector('header button');

const backDrop = document.body.firstElementChild;

const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
    addModal.classList.toggle('visible');
    toggleBackDrop();
}

startAddBtn.addEventListener('click', toggleMovieModal);
