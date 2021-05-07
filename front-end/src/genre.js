// const homeButton = document.getElementById("homeButton")
// homeButton.addEventListener("click", renderHome)

class Genre {
    static allGenres = []

    constructor({ name, id, movies }) {
        this.name = name
        this.id = id
        debugger
        movies.forEach(movie => new Movie(movie))
        Genre.allGenres.push(this)

    }

    get movies() {
        return Movie.allMovies.filter(movie => movie.genreId === this.id)
    }


    static fetchGenres() {
        fetch("http://localhost:3000/genres")
            .then(resp => resp.json())

            .then(this.appendGenres)
    }

    static appendGenres(genres) {
        const homeButton = document.getElementById("homeButton")
        homeButton.addEventListener("click", renderHome)

        for (let genre of genres) {
            let newGenre = new Genre(genre)
            newGenre.appendGenre()

        }
    }

    static appendGenresForHomeButton() {
        for (let genre of Genre.allGenres) {
            genre.appendGenre()
        }
    }

    appendGenre() {

        const genresDiv = document.getElementById("genres")
        const div = document.createElement("div")
        div.innerText = this.name
        const genreShow = document.createElement("button")
        genreShow.innerText = "Edit Movies"
        genreShow.id = `genreShow-${this.id}`
        genreShow.className = "btn btn-info"
        div.append(genreShow)
        genreShow.addEventListener("click", this.renderMovies.bind(this))
        genresDiv.append(div)
        this.appendMovies(div)
    }

    appendMovies(el) {
        const ul = document.createElement("ul")
        ul.id = `genre-${this.id}`
        el.append(ul)

        for (let movie of this.movies) {
            movie.appendMovie(ul)
        }
    }


    renderMovies() {
        const genreContainer = document.getElementById("genre-container")
        genreContainer.children[1].innerHTML = ""
        genreContainer.children[0].remove()
        const homeButton = document.getElementById("homeButton")
        homeButton.addEventListener("click", renderHome)

        this.appendGenre()
        const showButton = document.getElementById(`genreShow-${this.id}`)

        showButton.remove()
        this.appendMovieForm()
    }

    appendMovieForm() {
        const genres = document.getElementById("genres")

        const movieForm = `
        <form id="movieForm">
        <label>Add a Movie</label>
        <input id="movieName">
        <input type="hidden" id="${this.id}">
        <input type="submit" class="btn btn-primary" value="Submit">
        </form>
        `
        genres.innerHTML += movieForm
        document.getElementById("movieForm").addEventListener("submit", Movie.addMovie)


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









