class Api::UsersController < ApplicationController

    before_action :authenticate_user!

    def index
        render json: User.all
        ## this method is for testing redux saga && admins
    end

    def profile_upload
    end

end
