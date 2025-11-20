const showAddMovieBtn = document.getElementById("add-movie-btn");
const addModalDiv = document.getElementById("add-modal");
const backDropDiv = document.getElementById("backdrop");

const addMovieCancelBtn = document.querySelector(".btn--passive");
const addMovieSuccessBtn = document.querySelector(".btn--success");

const modalContentDiv = document.querySelector(".modal__content");
const modalContentInputs = modalContentDiv.querySelectorAll(`input`);

const entryTextSection = document.getElementById("entry-text");

const movieList = document.getElementById(`movie-list`);


const deleteMovieModal = document.getElementById("delete-modal");


const movies = [];


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

    const createMovieElement = document.createElement("li");

    createMovieElement.className = "movie-element";
    createMovieElement.innerHTML = `
    <div class="movie-element__image" ><img src="${movieInputValues.imageUrl}" alt="${movieInputValues.title}"></div>
    <div class="movie-element__info"> <h2>${movieInputValues.title}</h2>  <p>${movieInputValues.ratingValue}/5</p> </div>
    <div><button type="button" > DELETE</button> </div>
    `;

    const findDeleteButtons = createMovieElement.querySelector(`button`);
    findDeleteButtons.addEventListener("click", () => {
        console.log(`Movie ID:  ${movieInputValues.id}`);
        showDeleteMovieModal();
    });

    movieList.append(createMovieElement);
    movies.push(movieInputValues);
    console.log(movieInputValues);
    console.log(movies);
}


const showDeleteMovieModal = () => {
    deleteMovieModal.classList.add("visible");
    showBackdropDiv();
}

const hideDeleteMovieModal = () => {
    deleteMovieModal.classList.remove("visible");
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