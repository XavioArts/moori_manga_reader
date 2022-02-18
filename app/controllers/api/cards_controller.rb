class Api::CardsController < ApplicationController
    before_action :authenticate_user!
    before_action :set_comic
    before_action :set_card, only: [:show, :update, :destroy]

    def index
        render json: @comic.cards 
    end

    def show 
        render json: @card
    end

    def create
        ## Will need to adjust this to include image upload
        @card = @comic.cards.new(card_params)
        if @card.save
            render json: @card
        else
            render json: {errors: @card.errors}, status: 422
        end
    end

    def update
        if @card.update(card_params)
            render json: @card, include: [:pages]
        else
            render json: {errors: @card.errors}, status: 422
        end
    end

    def destroy
        render json: @card.destroy
    end

    private 

    def set_comic
        @comic = Comic.find(params[:comic_id])
    end

    def set_card
        @card = @comic.cards.find(params[:id])
    end

    def card_params
        params.require(:card).permit(:title, :price, :front_image, :back_image)
    end
end
