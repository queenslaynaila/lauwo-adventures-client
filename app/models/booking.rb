class Booking < ApplicationRecord
    belongs_to :route_duration
    validates :first_name, :last_name, :email, :phone_number, :country, :travel_period, :no_of_travellers, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP }
    validates :phone_number, format: { with: /\A\+?\d{1,3}[- ]?\d{9,11}\z/, message: "should be a valid phone number with country code" }
    validates :no_of_travellers, numericality: { only_integer: true, greater_than: 0 }
    validates :additional_info, length: { maximum: 500 }
end
