class CreateBlogs < ActiveRecord::Migration[7.0]
  def change
    create_table :blogs do |t|
      t.string :image_url
      t.string :title
      t.text :content
      t.string :author
      
      t.timestamps
    end
  end
end
