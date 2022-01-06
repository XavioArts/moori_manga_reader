class CreatePages < ActiveRecord::Migration[6.1]
  def change
    create_table :pages do |t|
      t.belongs_to :chapter, null: false, foreign_key: true
      t.string :content

      t.timestamps
    end
  end
end
