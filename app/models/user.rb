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
  has_many :comics, through: :favorites
  has_many :comics, through: :publications

end
