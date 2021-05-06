# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Genre.create(name: "Action")
Genre.create(name: "Fantasy")
Genre.create(name: "Sci-fi")
Genre.create(name: "Documentary")

Movie.create(name: "Tenet", genre_id: 1)
Movie.create(name: "Lord of the Rings", genre_id: 2)
Movie.create(name: "Star Wars", genre_id: 3)
Movie.create(name: "The Social Dilemma", genre_id: 4)
Movie.create(name: "Inception", genre_id: 1)
Movie.create(name: "The Dark Knight", genre_id: 1)
Movie.create(name: "Blade Runner 2049", genre_id: 3)
