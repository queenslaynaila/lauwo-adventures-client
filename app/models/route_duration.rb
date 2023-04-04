class RouteDuration < ApplicationRecord
    belongs_to :route
    has_many :itineries
end
