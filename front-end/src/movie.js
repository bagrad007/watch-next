

class Movie {
    constructor({ name, id, genre_id }) {
        this.name = name
        this.id = id
        this.genreId = genre_id
    }

    static appendMovieForm() {
        const genres = document.getElementById("genres")

        const movieForm = `
        <form id="movieForm">
        <label>Add a Movie</label>
        <input id="movieName">
        <button class="btn btn-primary">Submit</button>
        </form>
        `

        genres.innerHTML += movieForm


        document.getElementById(movieForm).addEventListener("submit", Movie.addMovie)
    }



    appendMovie(ul) {
        const movieLi = document.createElement("li")
        movieLi.innerText = this.name

        const movieDelete = document.createElement("button")
        movieDelete.className = "btn btn-danger"
        movieDelete.innerText = "Delete"
        movieDelete.id = this.id


        movieLi.append(movieDelete)
        movieDelete.addEventListener("click", e => {

            this.deleteMovie(movieLi)
        })

        ul.append(movieLi)

    }

    deleteMovie(movieLi) {
        fetch(`http://localhost:3000/movies/${this.id}`, {
            method: "DELETE"
        }).then(resp => resp.json())
            .then(m => {
                movieLi.remove()
            })
    }

    static addMovie(e) {
        e.preventDefault()

    }
}









