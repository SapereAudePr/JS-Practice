const showAddMovieBtn = document.getElementById("add-movie-btn");
const addModalDiv = document.getElementById("add-modal");
const backDropDiv = document.getElementById("backdrop");

const addMovieCancelBtn = document.querySelector(".btn--passive");
const addMovieSuccessBtn = document.querySelector(".btn--success");

const modalContentDiv = document.querySelector(".modal__content");
const modalContentInputs = modalContentDiv.querySelectorAll(`input`);

const entryTextSection = document.getElementById("entry-text");

const movieList = document.getElementById(`movie-list`);

const movies = [];

const userInputsHandler = () => {
    const titleValue = modalContentInputs[0].value;
    const imageUrlValue = modalContentInputs[1].value;
    const ratingValue = modalContentInputs[2].value;

    if (titleValue === `` || imageUrlValue === `` || ratingValue === `` || ratingValue < 0 || ratingValue > 5) {
        alert('Please enter valid inputs');
        return;
    }

    const movieInputValues = {
        title: titleValue,
        imageUrl: imageUrlValue,
        ratingValue: ratingValue,
    };

    movies.push(movieInputValues);
    console.log(movies);
}

const clearUserInputs = () => {
    for (const input of modalContentInputs) {
        input.value = '';
    }
}

const updateUI = () => {
    if (movies.length > 0) {
        entryTextSection.classList.add('invisible');
    }
}








const addMovieSuccessHandler = () => {
    userInputsHandler();
    hideBackdropDiv();
    hideAddMovieModal();
    updateUI();
}

const addMovieCancelHandler = () => {
    hideAddMovieModal();
    hideBackdropDiv();
    clearUserInputs();
}

const toggleBackdropDiv = () => {
    backDropDiv.classList.toggle("visible");
    hideAddMovieModal();
    clearUserInputs();
}

const showBackdropDiv = () => {
    backDropDiv.classList.add("visible");
}

const hideBackdropDiv = () => {
    backDropDiv.classList.remove("visible");
}

const showAddMovieModal = () => {
    addModalDiv.classList.add("visible");
    showBackdropDiv();
}

const hideAddMovieModal = () => {
    addModalDiv.classList.remove("visible");
}


showAddMovieBtn.addEventListener("click", () => {
    showAddMovieModal();
});
addMovieSuccessBtn.addEventListener("click", () => {
    addMovieSuccessHandler();
});
addMovieCancelBtn.addEventListener("click", () => {
    addMovieCancelHandler();
});
backDropDiv.addEventListener("click", () => {
    toggleBackdropDiv();
});