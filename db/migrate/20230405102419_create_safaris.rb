class CreateSafaris < ActiveRecord::Migration[7.0]
  def change
    create_table :safaris do |t|
      t.string :name
      t.string :duration
      t.string :image_url

      t.timestamps
    end
  end
end
