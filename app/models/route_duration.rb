class RouteDuration < ApplicationRecord
    belongs_to :route
    has_many :itineries
    has_many :bookings
end
