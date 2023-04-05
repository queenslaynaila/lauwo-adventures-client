class Mountain < ApplicationRecord
    has_many :routes
    has_many :route_durations, through: :routes
    has_many :itineries, through: :route_durations
end
