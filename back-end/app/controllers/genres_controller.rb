class GenresController < ApplicationController
  def index
    genres = Genre.all
    render json: genres, only: [:id, :name], include: :movies
  end

  def create
    genre = Genre.create(genre_params)
    render json: genre, only: [:id, :name], include: :movies
  end

  def destroy
    genre = Genre.find_by(id: params[:id])
    genre.delete
    render json: { message: "Successfully Deleted" }
  end

  private

  def genre_params
    params.require(:genre).permit(:name)
  end
end
