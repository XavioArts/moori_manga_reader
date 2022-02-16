# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_01_07_000415) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "badges", force: :cascade do |t|
    t.bigint "comic_id", null: false
    t.string "title"
    t.integer "price"
    t.text "description"
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comic_id"], name: "index_badges_on_comic_id"
  end

  create_table "cards", force: :cascade do |t|
    t.bigint "comic_id", null: false
    t.string "title"
    t.integer "price"
    t.string "front_image"
    t.string "back_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comic_id"], name: "index_cards_on_comic_id"
  end

  create_table "chapters", force: :cascade do |t|
    t.bigint "comic_id", null: false
    t.string "title"
    t.text "summary"
    t.string "icon"
    t.integer "likes"
    t.integer "views"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comic_id"], name: "index_chapters_on_comic_id"
  end

  create_table "comics", force: :cascade do |t|
    t.string "title"
    t.string "author"
    t.string "icon"
    t.string "cover"
    t.string "summary"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "comments", force: :cascade do |t|
    t.bigint "chapter_id", null: false
    t.bigint "user_id", null: false
    t.text "content"
    t.integer "likes"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chapter_id"], name: "index_comments_on_chapter_id"
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "favorites", force: :cascade do |t|
    t.bigint "user_id", null: false
    t.bigint "comic_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comic_id"], name: "index_favorites_on_comic_id"
    t.index ["user_id"], name: "index_favorites_on_user_id"
  end

  create_table "pages", force: :cascade do |t|
    t.bigint "chapter_id", null: false
    t.string "content"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["chapter_id"], name: "index_pages_on_chapter_id"
  end

  create_table "publications", force: :cascade do |t|
    t.string "title"
    t.bigint "user_id", null: false
    t.bigint "comic_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["comic_id"], name: "index_publications_on_comic_id"
    t.index ["user_id"], name: "index_publications_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "provider", default: "email", null: false
    t.string "uid", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.boolean "allow_password_change", default: false
    t.datetime "remember_created_at"
    t.string "confirmation_token"
    t.datetime "confirmed_at"
    t.datetime "confirmation_sent_at"
    t.string "unconfirmed_email"
    t.string "name"
    t.string "nickname"
    t.string "image"
    t.string "email"
    t.json "tokens"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "sign_in_count", default: 0
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string "current_sign_in_ip"
    t.string "last_sign_in_ip"
    t.string "role", default: "Reader"
    t.integer "points"
    t.text "badges"
    t.text "cards"
    t.index ["confirmation_token"], name: "index_users_on_confirmation_token", unique: true
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
    t.index ["uid", "provider"], name: "index_users_on_uid_and_provider", unique: true
  end

  add_foreign_key "badges", "comics"
  add_foreign_key "cards", "comics"
  add_foreign_key "chapters", "comics"
  add_foreign_key "comments", "chapters"
  add_foreign_key "comments", "users"
  add_foreign_key "favorites", "comics"
  add_foreign_key "favorites", "users"
  add_foreign_key "pages", "chapters"
  add_foreign_key "publications", "comics"
  add_foreign_key "publications", "users"
end
