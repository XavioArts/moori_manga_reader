class Api::BadgesController < ApplicationController

    before_action :authenticate_user!
    before_action :set_comic
    before_action :set_badge, only: [:show, :update, :destroy]

    def index
        render json: @comic.badges 
    end

    def show 
        render json: @badge
    end

    def create
        ## Will need to adjust this to include image upload
        @badge = @comic.badges.new(badge_params)
        if @badge.save
            render json: @badge
        else
            render json: {errors: @badge.errors}, status: 422
        end
    end

    def update
        if @badge.update(badge_params)
            render json: @badge, include: [:pages]
        else
            render json: {errors: @badge.errors}, status: 422
        end
    end

    def destroy
        render json: @badge.destroy
    end

    private 

    def set_comic
        @comic = Comic.find(params[:comic_id])
    end

    def set_badge
        @badge = @comic.badges.find(params[:id])
    end

    def badge_params
        params.require(:badge).permit(:title, :price, :description, :image)
    end

end
