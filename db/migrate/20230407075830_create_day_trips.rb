class CreateDayTrips < ActiveRecord::Migration[7.0]
  def up
    create_table :day_trips do |t|
      t.string :name
      t.text :description
      t.text :itinerary
      t.string :price
      t.string :image_url
      t.text :inclusions
      t.text :exclusions
      t.references :adventure, null: false, foreign_key: true

      t.timestamps
    end
  end

  def down
    drop_table :day_trips
  end
end
