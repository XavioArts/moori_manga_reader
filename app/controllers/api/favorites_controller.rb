class Api::FavoritesController < ApplicationController

    before_action :authenticate_user!
    before_action :set_favorite, only: [:destroy]

    def index
        render json: current_user.favorites
    end

    def create
        @favorite = current_user.favorites.new(favorite_params)
        if @favorite.save
            render json: @favorite
        else
            render json: {errors: @favorite.errors}, status: 422
        end
    end

    def destroy
        render json: @favorite.destroy
    end

    private

    def favorite_params
        params.require(:favorite).permit(:user_id, :comic_id)
    end

    def set_favorite
        @favorite = Favorite.find(params[:id])
    end

end
