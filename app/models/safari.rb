class Safari < ApplicationRecord
    has_many :safari_itineries, -> { order(day: :asc) }, dependent: :destroy
    has_many :bookings, as: :bookable, dependent: :destroy
end
