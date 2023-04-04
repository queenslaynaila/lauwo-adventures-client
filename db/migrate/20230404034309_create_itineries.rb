class CreateItineries < ActiveRecord::Migration[7.0]
  def change
    create_table :itineries do |t|
      t.integer  :route_duration_id
      t.string :title
      t.text :description
      t.string :meals
      t.string :distance
      t.string :image_URL
      t.string :accomodation
      t.string :vegatation
      t.string :elevation

      t.timestamps
    end
  end
end
