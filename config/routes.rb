Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'api/auth'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api do
    resources :comics do
      resources :chapters do
        resources :pages 
        resources :comments
      end
      resources :badges
      resources :cards
    end
    get "favorites", to: "comics#favorites"
    get "unfavorited", to: "comics#unfavorited"
    get "comics_full", to: "comics#comics_full"
    resources :favorites
    resources :publications
    get "users", to: "users#index"
    post "users/image", to: "users#profile_upload"
  end
end
