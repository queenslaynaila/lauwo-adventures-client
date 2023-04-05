class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string  :phone_number
      t.string :country
      t.string :travel_period #the months they booking the trip or sfari for
      t.string :no_of_travellers
      t.string :additional_info
      t.integer :route_duration_id  
      t.timestamps
    end
  end
end
