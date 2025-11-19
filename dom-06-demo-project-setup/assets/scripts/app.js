const modalActions = document.querySelector('.modal__actions');

const deleteModal = document.querySelector('#delete-modal');

const modalActionCancelBtn = modalActions.querySelector('.btn--passive');
const modalActionAddBtn = modalActions.querySelector('.btn--success');

const addModal = document.getElementById('add-modal');

const startAddBtn = document.querySelector('header button');

const backDrop = document.body.firstElementChild;

const userInputs = addModal.querySelectorAll('input');

const section = document.querySelector('#entry-text');

const movies = [];

const movieList = document.querySelector('#movie-list');

const updateUI = () => section.classList.toggle(`invisible`, movies.length > 0);


const deleteMovie = movieID => {
    let movieIndex = 0;
    for (const movie of movies) {
        if (movie.newID === movieID) {
            break;
        }
        movieIndex++;
    }
    movies.splice(movieIndex, 1);
    console.log(movieIndex, movieList.children[movieIndex]);
    movieList.children[movieIndex].remove();
    deleteModal.classList.remove(`visible`);
}

const deleteMovieHandler = (movieID) => {
    deleteModal.classList.add('visible');
    backDrop.classList.toggle('visible');
    // deleteMovie(movieID);
}

const renderMovieList = (id, title, imageUrl, rating) => {
    const newMovieListElement = document.createElement('li');
    newMovieListElement.className = `movie-element`;
    newMovieListElement.innerHTML = `
    <div class="movie-element__image" > <img src="${imageUrl}" alt="${title}"></div>
    <div class="movie-element__info" > <h2>${title}</h2> <p>${rating}/5</p>  </div>`;
    newMovieListElement.addEventListener('click', deleteMovieHandler.bind(null, id));
    movieList.append(newMovieListElement);
}


const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');
}

const closeMovieModal = () => {
    addModal.classList.remove('visible');
    backDrop.classList.remove('visible');
}

const showMovieModal = () => {
    addModal.classList.add('visible');
    toggleBackDrop();
}

const toggleCancelModalHandler = () => {
    closeMovieModal();
    clearMovieInputs();
    toggleBackDrop();
}

const addMovieHandler = () => {
    const titleValue = userInputs[0].value;
    const imageUrlValue = userInputs[1].value;
    const ratingValue = userInputs[2].value;

    if (titleValue.trim() === '' || imageUrlValue.trim() === '' || ratingValue.trim() === '' || +ratingValue < 1 || +ratingValue > 5) {
        alert('Please enter a valid input');
        return;
    }

    const newMovie = {
        newID: Math.random().toString(),
        title: titleValue,
        imageUrl: imageUrlValue,
        rating: ratingValue,
    }

    movies.push(newMovie);
    console.log(movies);
    console.log(newMovie);
    closeMovieModal();
    clearMovieInputs();
    updateUI();
    renderMovieList(newMovie.newID, newMovie.title, newMovie.imageUrl, newMovie.rating);
}

const clearMovieInputs = () => {
    for (const input of userInputs) {
        input.value = '';
    }
}

startAddBtn.addEventListener('click', showMovieModal);
backDrop.addEventListener('click', toggleCancelModalHandler);
modalActionCancelBtn.addEventListener('click', toggleCancelModalHandler);
modalActionAddBtn.addEventListener(`click`, addMovieHandler)