const genreForm = document.getElementById("genre-form")

class Genre {
    constructor(genre) {
        this.name = genre.name
        this.id = genre.id
        this.movies = genre.movies

    }

    static appendGenres(genres) {
        for (let genre of genres) {
            let newGenre = new Genre(genre)
            newGenre.appendGenre()

        }
    }

    appendGenre() {

        const genresDiv = document.getElementById("genres")
        const li = document.createElement("li")
        li.innerText = this.name
        const genreShow = document.createElement("button")
        genreShow.innerText = "Show Movies"
        genreShow.id = "genreShow"
        genreShow.className = "btn btn-info"
        li.append(genreShow)
        genreShow.addEventListener("click", this.renderMovies.bind(this))
        genresDiv.append(li)
        appendMovies(this.movies, li)
    }

    renderMovies() {
        const genreContainer = document.getElementById("genre-container")
        genreContainer.children[1].innerHTML = ""
        genreContainer.children[0].remove()
        this.appendGenre()
        const showButton = document.getElementById("genreShow")

        showButton.remove()
        appendMovieForm()
    }

    static fetchGenres() {
        fetch("http://localhost:3000/genres")
            .then(resp => resp.json())

            .then(this.appendGenres)
    }


    static postGenre(e) {
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
            .then(genre => {
                let newGenre = new Genre(genre)
                newGenre.appendGenre()
            })
    }
}









