class AddCardsToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :cards, :text
  end
end
