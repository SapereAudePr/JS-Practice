const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-movie-btn");

const movieList = document.getElementById("movie-list");
const movies = [];

const renderMovies = (title, genre, comment, point, id) => {
    const createList = document.createElement("li");

    createList.innerHTML = `
    <div style="color: blue">${title} </div>
    <div style="color: #f3cc4b">${genre}</div>
    <div style="color: greenyellow">${comment}</div>
    <div>${point}</div>`

    movies.length > 0 ? movieList.classList.add(`visible`) : movieList.classList.remove(`visible`);

    movieList.append(createList);
}

const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const comment = document.getElementById("comment").value;
    const point = document.getElementById("point").value;

    if (title.trim() === "" || genre.trim() === "" || comment.trim() === "") return;

    const newMovie = {
        title,
        genre,
        comment,
        point,
        id: Math.random(),
    }

    movies.push(newMovie);
    console.log(movies);
    console.log(newMovie);
    renderMovies(newMovie.title, newMovie.genre, newMovie.comment, newMovie.point, newMovie.id);
}

const searchMovieHandler = () => {
    const filterTerm = document.getElementById("filter-title").value;
    renderMovies(filterTerm);
}


addMovieBtn.addEventListener("click", addMovieHandler);
searchMovieBtn.addEventListener("click", searchMovieHandler);