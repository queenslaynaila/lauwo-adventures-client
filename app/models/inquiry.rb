class Inquiry < ApplicationRecord

  validates :name, presence: true, length: { maximum: 30 , minimum: 2 , message: "Name must be between 2 and 30 characters" }
  validates :email, presence: true, format: { with: /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i , message: "Please enter a valid email address" }
  validates :message, presence: true , length: { maximum: 500 , minimum: 10 , message: "Message must be between 10 and 500 characters" }

end
