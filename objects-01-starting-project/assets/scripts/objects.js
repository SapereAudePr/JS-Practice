const addMovieBtn = document.getElementById("add-movie-btn");
const searchMovieBtn = document.getElementById("search-movie-btn");

const movieList = document.getElementById("movie-list");
const movies = [];


const filterInputEl = document.getElementById("filter-title");


const renderMovies = (filterTerm = ``) => {
    movies.length > 0 ? movieList.classList.add(`visible`) : movieList.classList.remove(`visible`);

    movieList.innerHTML = ``;

    const filteredMovies = filterTerm.trim() === ''
        ? movies
        : movies.filter(movie =>
            movie.title.toLowerCase().includes(filterTerm.toLowerCase())
        );

    filteredMovies.forEach(movie => {
        const createList = document.createElement("li");
        createList.innerHTML = `
            <div style="color: blue">Title: ${movie.formatTitle()}</div>
            <div style="color: #f3cc4b">Genre: ${movie.genre}</div>
            <div style="color: greenyellow">Comment: ${movie.comment}</div>
            <div>Point: ${movie.rating}</div>
            <div>ID: ${movie.id}</div>
        `;
        movieList.append(createList);
    });

}


const addMovieHandler = () => {
    const title = document.getElementById("title").value;
    const genre = document.getElementById("genre").value;
    const comment = document.getElementById("comment").value;
    const rating = document.getElementById("rating").value;

    if (title.trim() === `` || genre.trim() === `` || comment.trim() === `` || rating.trim() === ``) return

    const newMovie = {
        title,
        genre,
        comment,
        rating,
        id: Math.random(),
        formatTitle: function() {
            return this.title.toUpperCase();
        }
    }
    movies.push(newMovie);
    console.log(movies);
    console.log(newMovie);

    renderMovies();
}

const searchMovieHandler = () => {
    const filterTerm = filterInputEl.value;
    renderMovies(filterTerm);
}


searchMovieBtn.addEventListener("click", searchMovieHandler);
addMovieBtn.addEventListener("click", addMovieHandler);