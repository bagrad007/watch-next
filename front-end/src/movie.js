class Movie {
    static allMovies = []

    constructor({ name, id, genre_id }) {
        this.name = name
        this.id = id
        this.genreId = genre_id
        Movie.allMovies.push(this)
    }


    appendMovie(ul) {
        const movieLi = document.createElement("li")
        movieLi.innerText = this.name
        movieLi.id = `li-${this.id}`
        movieLi.className = "col-sm"
        ul.appendChild(movieLi)

        const movieDelete = document.createElement("button")
        movieDelete.className = "btn btn-danger"
        movieDelete.innerText = "Delete"
        movieDelete.id = this.id
        movieDelete.addEventListener("click", () => {
            this.deleteMovie(movieLi)
        })

        movieLi.appendChild(movieDelete)
    }

    deleteMovie(movieLi) {
        fetch(`http://localhost:3000/movies/${this.id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
            .then(m => {
                document.getElementById(movieLi.id).remove()
                Movie.allMovies = Movie.allMovies.filter(movie => movie.id !== this.id)
            })
    }

    static addMovie(e) {
        e.preventDefault()
        const userInput = e.target.children[1].value
        const inputId = e.target.children[2].id
        const body = {
            movie: {
                name: userInput,
                genre_id: inputId
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

        fetch("http://localhost:3000/movies", options)
            .then(resp => resp.json())
            .then(movie => {

                let ul = document.getElementById(`genre-${this.children[2].id}`)
                let newMovie = new Movie(movie)
                newMovie.appendMovie(ul)
            })
    }
}

