class Movie {

}



function appendMovies(genre, el) {

    const ul = document.createElement("ul")
    el.append(ul)

    for (let movie of genre) {
        const movieLi = document.createElement("li")
        movieLi.innerText = movie.name
        ul.append(movieLi)
    }
}




