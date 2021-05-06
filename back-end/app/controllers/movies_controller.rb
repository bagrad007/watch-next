class MoviesController < ApplicationController
  def index
    movies = Movie.all
    render json: movies
  end

  def create
    movie = Movie.create(movie_params)
    render json: movie
  end

  def destroy
    movie = Movie.find_by(id: params[:id])
    movie.destroy
    render json: { message: "Successfully Deleted" }
  end

  private

  def movie_params
    params.require(:movie).permit(:name, :genre_id)
  end
end
