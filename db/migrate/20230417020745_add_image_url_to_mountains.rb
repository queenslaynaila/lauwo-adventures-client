class AddImageUrlToMountains < ActiveRecord::Migration[7.0]
  def change
    add_column :mountains, :image_url, :string
  end
end
