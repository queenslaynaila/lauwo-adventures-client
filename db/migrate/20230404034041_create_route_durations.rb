class CreateRouteDurations < ActiveRecord::Migration[7.0]
  def change
    create_table :route_durations do |t|
      t.integer :route_id
      t.string :title
      t.integer :duration_days
      t.integer :standard_price
      t.integer :premium_price
      t.text    :standard_inclusive
      t.text    :standard_exclusive
      t.text    :premium_inclusive
      t.text    :premium_exclusive

      t.timestamps
    end
  end
end
