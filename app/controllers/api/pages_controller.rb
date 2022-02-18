class Api::PagesController < ApplicationController

    ## May not need, we will see
    before_action :authenticate_user!
    before_action :set_chapter
    before_action :set_page, only: [:show, :update, :destroy]

    def index 
        render json: @chapter.pages
    end

    def show 
        render json: @page
    end

    def update
        ## will need to see how im doing chapter creation first
    end

    def destroy
        render json: @page.destroy
    end

    private

    def set_page
        @page = @chapter.pages.find(params[:id])
    end

    def set_chapter
        @chapter = Chapter.find(params[:chapter_id])
    end

end
