class Adventure < ApplicationRecord
  has_many :mountains, dependent: :destroy
end
