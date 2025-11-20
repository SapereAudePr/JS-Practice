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

const deleteMovieModalDiv = document.getElementById("delete-modal");
const deleteMovieCancelBtn = document.getElementById("no-cancel-btn");
const deleteMovieSuccessBtn = document.getElementById("yes-success-btn");

let movieElementToDelete = null;
let movieIDtoDelete = null;


const renderAddedMovies = (id, title, imageUrl, rating) => {
    const createMovieElement = document.createElement("li");
    createMovieElement.className = "movie-element";
    createMovieElement.innerHTML = `
    <div class="movie-element__image" ><img src="${imageUrl}" alt="${title}"></div>
    <div class="movie-element__info"> <h2>${title}</h2>  <p>${rating}/5</p> </div>
    <div><button type="button" > DELETE</button> </div>
    `;

    const deleteButtons = createMovieElement.querySelector(`button`);
    deleteButtons.addEventListener("click", () => {
        movieElementToDelete = createMovieElement;
        movieIDtoDelete = id;
        console.log(`Movie ID:  ${id}`);
        showDeleteMovieModal();
    });


    movieList.append(createMovieElement);
    console.log(movies);
}

const addMovieHandler = () => {
    const idNum = Math.random().toString();
    const titleValue = modalContentInputs[0].value;
    const imageUrlValue = modalContentInputs[1].value;
    const ratingValue = modalContentInputs[2].value;

    if (titleValue === `` || imageUrlValue === `` || ratingValue === `` || ratingValue < 0 || ratingValue > 5) {
        alert('Please enter valid inputs');
        return;
    }

    const movieInputValues = {
        id: idNum,
        title: titleValue,
        imageUrl: imageUrlValue,
        ratingValue: ratingValue,
    };

    renderAddedMovies(idNum, titleValue, imageUrlValue, ratingValue);

    movies.push(movieInputValues);
    console.log(movieInputValues);
    console.log(movies);
}


const deleteMovieHandler = () => {
    movieElementToDelete.remove();

    const movieIndex = movies.findIndex(movie => movie.id === movieIDtoDelete);
    if (movieIndex > -1) {
        movies.splice(movieIndex, 1);
    }

    movieElementToDelete = null;

    hideDeleteMovieModal();

    console.log(movies);
    updateUI();
}


const clearUserInputs = () => {
    for (const input of modalContentInputs) {
        input.value = '';
    }
}

const updateUI = () => {
    if (movies.length > 0) {
        entryTextSection.classList.add('invisible');
    } else {
        entryTextSection.classList.remove('invisible');
    }
};


const addMovieSuccessHandler = () => {
    addMovieHandler();
    hideBackdropDiv();
    hideAddMovieModal();
    clearUserInputs();
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
    hideDeleteMovieModal();
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

const showDeleteMovieModal = () => {
    deleteMovieModalDiv.classList.add("visible");
    showBackdropDiv();
}

const hideDeleteMovieModal = () => {
    deleteMovieModalDiv.classList.remove("visible");
    hideBackdropDiv();
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
deleteMovieSuccessBtn.addEventListener("click", () => {
    deleteMovieHandler();
});
deleteMovieCancelBtn.addEventListener("click", () => {
    hideDeleteMovieModal();
});
backDropDiv.addEventListener("click", () => {
    toggleBackdropDiv();
});