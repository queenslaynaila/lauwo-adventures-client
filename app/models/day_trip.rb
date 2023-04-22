class DayTrip < ApplicationRecord
  belongs_to :adventure
  has_many :bookings, as: :bookable, dependent: :destroy
end
