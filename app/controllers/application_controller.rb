class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        before_action :configure_permitted_parameters, if: :devise_controller?

        protected

        def configure_permitted_parameters
                puts "-----------------"
                puts "configure_permitted_parameters called"
                puts "-----------------"
                devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :nickname, :image, :role, :points, :badges, :cards])
                devise_parameter_sanitizer.permit(:account_update, keys: [:name, :nickname, :image, :role, :points, :badges, :cards])
        end

end
