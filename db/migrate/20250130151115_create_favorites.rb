class CreateFavorites < ActiveRecord::Migration[6.1]
  def change
    create_table :favorites do |t|
      t.integer :user_id, null: false
      t.integer :book_id, null: false  # ← これがない場合、追加する必要がある
      t.timestamps
    end
  end
end
