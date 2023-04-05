class Route < ApplicationRecord
    belongs_to :mountain
    has_many :route_durations
    has_many :itineries, through: :route_durations
end
