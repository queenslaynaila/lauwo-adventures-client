class CreateFrequentlyAskedQuestions < ActiveRecord::Migration[7.0]
  def up
    create_table :frequently_asked_questions do |t|
      t.string :question
      t.text :answer
      t.timestamps
    end
  end

  def down
    drop_table :frequently_asked_questions
  end
end
