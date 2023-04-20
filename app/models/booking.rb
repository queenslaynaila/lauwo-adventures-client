class Booking < ApplicationRecord
    belongs_to :bookable, polymorphic: true
    validates :first_name, :last_name, :email, :phone_number, :country, :travel_period, :no_of_travellers, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP,message: "must be a valid email address" }
    validates :no_of_travellers, numericality: { greater_than_or_equal_to: 1, message: "must be at least 1" }
  validates :no_of_adults, numericality: { greater_than_or_equal_to: 1, message: "must be at least 1" }
    validates :additional_info, length: { maximum: 500,message: "cannot exceed 500 words" }
end
