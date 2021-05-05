class Movie {

}



function appendMovies(movies, el) {

    const ul = document.createElement("ul")
    el.append(ul)

    for (let movie of movies) {
        const movieLi = document.createElement("li")
        movieLi.innerText = movie.name
        ul.append(movieLi)



        const movieDelete = document.createElement("button")
        movieDelete.className = "btn btn-danger"
        movieDelete.innerText = "Delete"
        movieLi.append(movieDelete)
        movieDelete.addEventListener("click", () => deleteMovie(movie.id, movieLi))
    }
}


function appendMovieForm() {
    const genres = document.getElementById("genres")
    const movieForm = `
        <form id="movieForm">
        <label>Add a Movie</label>
        <input id="movieName">
        <input type="submit" value="Add Movie">
        </form>
    `

    genres.innerHTML += movieForm
    document.getElementById(movieForm).addEventListener("submit", addMovie)
}

function addMovie(e) {
    e.preventDefault()

}



function deleteMovie(movieId, movieLi) {
    fetch(`http://localhost:3000/genres/${movieId}`, {
        method: "DELETE"
    }).then(resp => resp.json())
        .then(m => movieLi.remove())
}
