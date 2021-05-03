class Genre {

}

function fetchGenres() {
    fetch("http://localhost:3000/genres")
        .then(resp => resp.json())
        .then(appendGenres)
}


function appendGenres(genres) {
    const genresDiv = document.getElementById("genres")
    for (let genre of genres) {
        const li = document.createElement("li")
        li.innerText = genre.name
        genresDiv.append(li)

        appendMovies(genre.movies, li)
    }
}

function postGenre() {

}