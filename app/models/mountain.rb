require 'securerandom'
class Mountain < ApplicationRecord
    before_create :generate_uuid
    belongs_to :adventure
    has_many :routes
    has_many :route_durations, through: :routes
    has_many :itineries, through: :route_durations
    has_many :bookings, through: :route_durations

   private
   def generate_uuid
    self.uuid = SecureRandom.uuid
   end
end
