class Api::PublicationsController < ApplicationController

    before_action :authenticate_user!
    before_action :set_publication, only: [:destroy]

    def index
        render json: current_user.publications
    end

    def create
        @publication = current_user.publications.new(publication_params)
        if @publication.save
            render json: @publication
        else
            render json: {errors: @publication.errors}, status 422
        end
    end
    # def create
    #     @publication = Publication.new(publication_params)
    #     if @publication.save
    #         render json: @publication
    #     else
    #         render json: {errors: @publication.errors}, status 422
    #     end
    # end

    def destroy
        render json: @publication.destroy
    end

    private

    def publication_params
        params.require(:publication).permit(:title, :user_id, :comic_id)
    end

    def set_publication
        @publication = Publication.find(params[:id])
    end

end
