class CreateItineries < ActiveRecord::Migration[7.0]
  def change
    create_table :itineries do |t|
      t.integer  :route_duration_id
      t.string :day_no
      t.string :title
      t.text :description
      t.string :hiking_time
      t.string :distance
      t.string :max_altitude
      t.string :vegatation
      t.string :meals
      t.string :accomodation
      t.timestamps
    end
  end
end
