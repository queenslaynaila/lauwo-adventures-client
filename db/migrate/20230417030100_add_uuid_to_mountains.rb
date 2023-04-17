class AddUuidToMountains < ActiveRecord::Migration[7.0]
  def change
    add_column :mountains, :uuid, :string
  end
end
