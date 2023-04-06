class CreateAdventures < ActiveRecord::Migration[7.0]
  def up
    create_table :adventures do |t|
      t.string :name
      t.timestamps
    end
  end

  def down
    drop_table :adventures
  end
end