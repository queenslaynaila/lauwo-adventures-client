class Safari < ApplicationRecord
    has_many :safari_itineries
    has_many :bookings
end
