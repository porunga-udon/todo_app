class AddIndexToTodos < ActiveRecord::Migration[5.2]
  def change
    add_index :todos, :content, length: 32
  end
end
