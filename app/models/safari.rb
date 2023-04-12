class Safari < ApplicationRecord
    has_many :safari_itineries
    has_many :bookings, as: :bookable, dependent: :destroy
end
