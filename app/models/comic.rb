class Comic < ApplicationRecord
    has_many :favorites, dependent: :destroy
    has_many :publications, dependent: :destroy
    has_many :chapters, dependent: :destroy
    has_many :badges, dependent: :destroy
    has_many :cards, dependent: :destroy
    # has_many :users, through: :favorites
    # has_one :user, through: :publications
end
