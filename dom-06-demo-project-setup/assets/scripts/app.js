const deleteModal = document.querySelector('#delete-modal');

const modalActionNoBtn = document.querySelector('#no-cancel-btn');
const modalActionYesBtn = document.querySelector('.btn--danger');

const modalActionCancelBtn = document.querySelector('.btn--passive');
const modalActionAddBtn = document.querySelector('.btn--success');

const addModal = document.getElementById('add-modal');

const startAddBtn = document.querySelector('header button');

const backDrop = document.getElementById('backdrop');

const userInputs = addModal.querySelectorAll('input');

const section = document.querySelector('#entry-text');

const movies = [];

const movieList = document.querySelector('#movie-list');

const updateUI = () => section.classList.toggle(`invisible`, movies.length > 0);

let movieIDToDelete;

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
    updateUI();
}

const closeDeleteModal = () => {
    deleteModal.classList.remove('visible');
}

const showMovieDeleteModal = (movieID) => {
    movieIDToDelete = movieID;
    deleteModal.classList.add('visible');
    backDrop.classList.toggle('visible');
}

const renderMovieList = (id, title, imageUrl, rating) => {
    const newMovieListElement = document.createElement('li');
    newMovieListElement.className = `movie-element`;
    newMovieListElement.innerHTML = `
    <div class="movie-element__image" > <img src="${imageUrl}" alt="${title}"></div>
    <div class="movie-element__info" > <h2>${title}</h2> <p>${rating}/5</p>  </div>`;
    newMovieListElement.addEventListener('click', showMovieDeleteModal.bind(null, id));
    movieList.append(newMovieListElement);
}


const toggleBackDrop = () => {
    backDrop.classList.toggle('visible');

}

const closeMovieModal = () => {
    addModal.classList.remove('visible');
    backDrop.classList.remove('visible');
    clearMovieInputs();
}

const showMovieModal = () => {
    addModal.classList.add('visible');
    toggleBackDrop();
}

const backdropClickHandler = () => {
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
backDrop.addEventListener('click', backdropClickHandler);
modalActionCancelBtn.addEventListener('click', closeMovieModal);
modalActionAddBtn.addEventListener(`click`, addMovieHandler)
modalActionNoBtn.addEventListener(`click`, () => {
    closeDeleteModal();
    toggleBackDrop();
});
modalActionYesBtn.addEventListener(`click`, () => {
    deleteMovie(movieIDToDelete);
    closeDeleteModal();
    toggleBackDrop();
})