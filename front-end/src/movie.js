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
        movieDelete.addEventListener("click", () => deleteMovie(movie.id))
    }
}

function deleteMovie(movieId) {
    fetch(`http://localhost:3000/genres/${movieId}`, {
        method: "DELETE"
    }).then(resp => resp.json())
        .then(m => console.log(m))
}
