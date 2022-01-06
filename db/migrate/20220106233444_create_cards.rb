class CreateCards < ActiveRecord::Migration[6.1]
  def change
    create_table :cards do |t|
      t.belongs_to :comic, null: false, foreign_key: true
      t.string :title
      t.integer :price
      t.string :front_image
      t.string :back_image

      t.timestamps
    end
  end
end
