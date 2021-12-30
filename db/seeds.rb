# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

User.destroy_all

u1 = User.create(email: "zwarriors@test.com", password: 123456)
u2 = User.create(email: "test@test.com", password: 123456)

2.times do 
    comic = Comic.create(title: Faker::DcComics.title, author: Faker::Name.name)
    u1.publications.create(title: comic.title, comic_id: comic.id)
    u2.favorites.create(comic_id: comic.id)
end


p u1
p "---------------"
p u1.publications
p "---------------"
p u2
p "---------------"
p u2.favorites