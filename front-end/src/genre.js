const genreForm = document.getElementById("genre-form")

class Genre {

}

function fetchGenres() {
    fetch("http://localhost:3000/genres")
        .then(resp => resp.json())
        .then(appendGenres)
}


function appendGenres(genres) {
    for (let genre of genres) {
        appendGenre(genre)
    }
}

function appendGenre(genre) {
    const genresDiv = document.getElementById("genres")
    const li = document.createElement("li")
    li.innerText = genre.name
    genresDiv.append(li)
    appendMovies(genre.movies, li)
}



function postGenre(e) {
    e.preventDefault()

    const userInput = e.target.children[1].value
    const body = {
        genre: {
            name: userInput
        }
    }
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"

        },
        body: JSON.stringify(body)
    }

    e.target.reset()

    fetch("http://localhost:3000/genres", options)
        .then(resp => resp.json())
        .then(genre => appendGenre(genre))

}