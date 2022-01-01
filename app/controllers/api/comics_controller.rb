class Api::ComicsController < ApplicationController

    before_action :authenticate_user!
    before_action :set_comic, only: [:show, :update, :destroy]

    def index
        render json: current_user.comics
    end

    def favorites
        render json: current_user.favorite_comics
    end

    def comics_full
        render json: Comic.all
    end

    def show
        render json: @comic
    end

    def create
        @comic = Comic.new(comic_params)
        if @comic.save
            render json: @comic
        else
            render json: {errors: @comic.errors}, status: 422
        end
    end

    def update
        if @comic.update(comic_params)
            render json: @comic
        else
            render json: {errors: @comic.errors}, status: 422
        end
    end

    def destroy
        render json: @comic.destroy
    end

    private

    def set_comic 
        @comic = Comic.find(params[:id])
    end

    def comic_params
        params.require(:comic).permit(:title, :author, :icon, :cover, :summary)
    end

end
