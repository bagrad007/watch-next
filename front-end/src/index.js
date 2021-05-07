let genreForm = document.getElementById("genre-form")
genreForm.addEventListener("submit", Genre.postGenre)

Genre.fetchGenres()

function renderHome() {
    document.getElementById("genre-container").innerHTML = `
    <form id="genre-form">
            <label>Genre Name:</label>
            <input type="text">
            <button class="btn btn-primary">Submit</button>
        </form>
    <div id="genres"></div>`
    genreForm = document.getElementById("genre-form")
    genreForm.addEventListener("submit", Genre.postGenre)
    Genre.appendGenresForHomeButton()
}