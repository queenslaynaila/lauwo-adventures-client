class CreateSafariItineries < ActiveRecord::Migration[7.0]
  def change
    create_table :safari_itineries do |t|
      t.integer :day
      t.string :title
      t.string :description
      t.string :mealplan
      t.string :image_url
      t.integer :safari_id

      t.timestamps
    end
  end
end
