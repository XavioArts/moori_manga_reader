class Api::ChaptersController < ApplicationController

    before_action :authenticate_user!
    before_action :set_comic
    before_action :set_chapter, only: [:show, :update, :destroy]

    def index
        render json: @comic.chapters 
    end

    def show 
        render json: @chapter, include: [:pages]
    end

    def create
        ## Will need to adjust this possibly for page image upload as well?
        @chapter = @comic.chapters.new(chapter_params)
        if @chapter.save
            ## possibly have page creation here
            render json: @chapter, include: [:pages]
        else
            render json: {errors: @chapter.errors}, status: 422
        end
    end

    def update
        if @chapter.update(chapter_params)
            render json: @chapter, include: [:pages]
        else
            render json: {errors: @chapter.errors}, status: 422
        end
    end

    def destroy
        render json: @chapter.destroy
    end

    private 

    def set_comic
        @comic = Comic.find(params[:comic_id])
    end

    def set_chapter
        @chapter = @comic.chapters.find(params[:id])
    end

    def chapter_params
        params.require(:chapter).permit(:title, :summary, :icon, :likes, :views)
    end

end
