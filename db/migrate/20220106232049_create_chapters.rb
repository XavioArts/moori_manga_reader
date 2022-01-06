class CreateChapters < ActiveRecord::Migration[6.1]
  def change
    create_table :chapters do |t|
      t.belongs_to :comic, null: false, foreign_key: true
      t.string :title
      t.text :summary
      t.string :icon
      t.integer :likes
      t.integer :views

      t.timestamps
    end
  end
end
