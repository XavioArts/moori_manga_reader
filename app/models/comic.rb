class Comic < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :publications, dependent: :destroy
    # has_many :users, through: :favorites
    # has_one :user, through: :publications
end
