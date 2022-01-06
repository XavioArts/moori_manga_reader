# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models 
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :favorites, dependent: :destroy
  has_many :publications, dependent: :destroy
  has_many :comments, dependent: :destroy
  # has_many :comics, through: :favorites
  has_many :comics, through: :publications
  # has_many :comics, ->(user) {where favorites: user.favorites}, through: :publications

  def favorite_comics
    p "favorite comics called"
    p "-----------------------"
    if self.favorites.length === 0
      ids = [0]
    else
      ids = self.favorites.map do |f|
        f.comic_id
      end
    end 
    # ids = ids.empty? ? [0] : ids
    Comic.where("id IN (?)", ids)
  end
  
  def unfavorited_comics
    p "unfavorited comics called"
    p "-----------------------"
    if self.favorites.length === 0
      ids = [0]
    else
      ids = self.favorites.map do |f|
        f.comic_id
      end
    end 
    # ids = ids.empty? ? [0] : ids
    Comic.where("id NOT IN (?)", ids)
  end

end
