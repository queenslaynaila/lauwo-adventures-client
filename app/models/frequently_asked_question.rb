class FrequentlyAskedQuestion < ApplicationRecord
  validates :question, :answer, presence: true
  validates :question, uniqueness: true
end
