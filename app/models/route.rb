class Route < ApplicationRecord
    belongs_to :mountain
    has_many :route_durations
end
