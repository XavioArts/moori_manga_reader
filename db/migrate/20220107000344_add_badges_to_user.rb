class AddBadgesToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :badges, :text
  end
end
