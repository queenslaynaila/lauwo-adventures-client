class CreatePlanningforms < ActiveRecord::Migration[7.0]
  def change
    create_table :planningforms do |t|
      t.string :adventure
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone_number
      t.string :country_of_residence
      t.string :tour_duration_in_days
      t.string :budget
      t.string :when_to_travel
      t.string :how_many_travelers
      t.string :no_of_adults
      t.string :no_of_children

      t.timestamps
    end
  end
end
