# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"

User.destroy_all

u1 = User.create(email: "zwarriors@test.com", password: 123456, role: "Creator")
u2 = User.create(email: "test@test.com", password: 123456, role: "Reader")
u3 = User.create(email: "test2@test.com", password: 123456, role: "Admin")
u4 = User.create(email: "reader@test.com", password: 123456)

2.times do 
    comic = Comic.create(title: Faker::DcComics.title, author: Faker::Name.name)
    u1.publications.create(title: comic.title, comic_id: comic.id)
    u2.favorites.create(comic_id: comic.id)

    chap = comic.chapters.create(title: "Chapter 1")
    chap.pages.create(content: "page 1 image url here")
    chap.pages.create(content: "page 2 image url here")
    chap.comments.create(user_id: u2.id, content: "Great chapter!")

    comic.badges.create(title: "Badge 1", price: 50)
    comic.cards.create(title: "Card 1", price: 50)
end




p u1
p "---------------"
p u1.publications
p "---------------"
p u2
p "---------------"
p u2.favorites
p "---------------"
p "chapters: #{Chapter.all.length}"
p "pages: #{Page.all.length}"
p "---------------"
p Badge.first
p Card.first
p "---------------"
p u3
p "---------------"
p u4