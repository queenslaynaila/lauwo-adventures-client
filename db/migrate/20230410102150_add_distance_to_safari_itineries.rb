class AddDistanceToSafariItineries < ActiveRecord::Migration[7.0]
  def change
    add_column :safari_itineries, :distance, :integer
  end
end
