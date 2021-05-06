

class Movie {
    constructor({ name, id, genre_id }) {
        this.name = name
        this.id = id
        this.genreId = genre_id
    }





    appendMovie(ul) {
        const movieLi = document.createElement("li")
        movieLi.innerText = this.name
        // debugger


        const movieDelete = document.createElement("button")
        movieDelete.className = "btn btn-danger"
        movieDelete.innerText = "Delete"
        movieDelete.id = this.id

        ul.appendChild(movieLi)
        movieLi.appendChild(movieDelete)

        movieDelete.addEventListener("click", function () {
            this.deleteMovie(movieLi)
        })


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
                debugger
                let newMovie = new Movie(movie)
                newMovie.appendMovie(ul)
            })
    }
}










