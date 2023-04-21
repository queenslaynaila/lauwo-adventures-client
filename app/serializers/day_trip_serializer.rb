class DayTripSerializer < ActiveModel::Serializer
  attributes :id, :name ,:description ,:price ,:image_url ,:inclusions ,:exclusions
end
