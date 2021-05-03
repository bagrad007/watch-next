class Genre {

}

function fetchGenres() {
    fetch("http://localhost:3000/genres")
        .then(resp => resp.json())
        .then(genres => console.log(genres))
}