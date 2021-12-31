class Api::ComicsController < ApplicationController

    before_action :authenticate_user!

    def index
        render json: current_user.comics
    end

    def favorites
        render json: current_user.favorite_comics
    end

end
