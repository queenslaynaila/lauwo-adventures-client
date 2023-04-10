class CreateCulturalTours < ActiveRecord::Migration[7.0]
  def up
    create_table :cultural_tours do |t|
      t.string :name
      t.string :description
      t.string :location
      t.string :price
      t.string :image_url
      t.text :itinerary
      t.text :inclusions
      t.text :exclusions
      t.references :adventure, null: false, foreign_key: true
      t.timestamps
    end
  end

  def down
    drop_table :cultural_tours
  end
end
