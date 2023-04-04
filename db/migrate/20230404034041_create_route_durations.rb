class CreateRouteDurations < ActiveRecord::Migration[7.0]
  def change
    create_table :route_durations do |t|
      t.integer :route_id
      t.integer :duration_days
      t.integer :price
      t.text :inclusive
      t.text :exclusive

      t.timestamps
    end
  end
end
