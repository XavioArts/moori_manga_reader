class CreateBadges < ActiveRecord::Migration[6.1]
  def change
    create_table :badges do |t|
      t.belongs_to :comic, null: false, foreign_key: true
      t.string :title
      t.integer :price
      t.text :description
      t.string :image

      t.timestamps
    end
  end
end
