class Booking < ApplicationRecord
    belongs_to :bookable, polymorphic: true
    validates :first_name, :last_name, :email, :phone_number, :country, :travel_period, :no_of_travellers, presence: true
    validates :email, format: { with: URI::MailTo::EMAIL_REGEXP,message: "must be a valid email address" }
    validates :additional_info, length: { maximum: 500,message: "cannot exceed 500 words" }
end
