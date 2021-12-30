class CreatePublications < ActiveRecord::Migration[6.1]
  def change
    create_table :publications do |t|
      t.string :title
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :comic, null: false, foreign_key: true

      t.timestamps
    end
  end
end
