class CreateBookings < ActiveRecord::Migration[7.0]
  def change
    create_table :bookings do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string  :phone_number
      t.string :country
      t.string :travel_period #the months they booking the trip or sfari for
      t.integer :no_of_travellers
      t.string :additional_info
      t.integer :no_of_adults
      t.integer :no_of_children , default: 0
      t.integer :no_of_small_children , default: 0
      t.references :bookable, polymorphic: true, index: true
      t.timestamps
    end
  end
end
