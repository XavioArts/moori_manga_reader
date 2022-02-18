class Api::CommentsController < ApplicationController
    ##This will be a bit more complicated
    ##will need to make more changes /////// might be done

    before_action :authenticate_user!
    before_action :set_chapter
    before_action :set_comment, only: [:show, :update, :destroy]

    def index
        render json: @chapter.comments 
    end

    def show 
        render json: @comment
    end

    def create
        ## Will need to adjust this to include image upload
        @comment = @chapter.comments.new(comment_params)
        if @comment.save
            render json: @comment
        else
            render json: {errors: @comment.errors}, status: 422
        end
    end

    def update
        if @comment.update(comment_params)
            render json: @comment, include: [:pages]
        else
            render json: {errors: @comment.errors}, status: 422
        end
    end

    def destroy
        render json: @comment.destroy
    end

    private 

    def set_chapter
        @chapter = Chapter.find(params[:chapter_id])
    end

    def set_comment
        @comment = @chapter.comments.find(params[:id])
    end

    def comment_params
        params.require(:comment).permit(:content, :likes, :user_id)
    end

end
