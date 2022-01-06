class Chapter < ApplicationRecord
  belongs_to :comic
  has_many :pages, dependent: :destroy
  has_many :comments, dependent: :destroy 
end
