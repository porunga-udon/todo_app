class AddKeyToTodos < ActiveRecord::Migration[5.2]
  def change
    add_column :todos, :key, :integer
  end
end
