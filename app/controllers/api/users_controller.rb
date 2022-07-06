class Api::UsersController < ApplicationController

    before_action :authenticate_user!

    def index
        render json: User.all
        ## this method is for testing redux saga && admins
    end

    def profile_upload
        
        file = params[:file]
        # file2 = params[:avatar]
        p file 

        if file 
            begin
                puts "saving to cloudinary"
                cloud_image = Cloudinary::Uploader.upload(file, public_id: file.original_filename, secure: true, resource_type: :auto)
            rescue => e
                puts "error uploading"
                p e 
                render json: {errors: e}, status: 422
                return
            end
        end

        p cloud_image
        if cloud_image && cloud_image['secure_url']
            current_user.image = cloud_image['secure_url']
        end

        if current_user.save
            render json: current_user
        else
            render json: {errors: e}, status: 422
        end

    end

end
