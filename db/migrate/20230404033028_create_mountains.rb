class CreateMountains < ActiveRecord::Migration[7.0]
  def change
    create_table :mountains do |t|
      t.string :mountain_name
      t.text :description
      t.string :overview
      t.timestamps
    end
  end
end
