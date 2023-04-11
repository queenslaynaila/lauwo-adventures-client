class AddJtiToAdmin < ActiveRecord::Migration[7.0]
  def up
    add_column :admins, :jti, :string
    add_index :admins, :jti, unique: true
  end

  def down
    drop_column :admins, :jti
    drop_ index :admins, :jti
  end
end
