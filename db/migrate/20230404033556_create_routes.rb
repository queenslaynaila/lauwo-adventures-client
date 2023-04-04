class CreateRoutes < ActiveRecord::Migration[7.0]
  def change
    create_table :routes do |t|
      t.string :route_name
      t.integer :mountain_id

      t.timestamps
    end
  end
end
