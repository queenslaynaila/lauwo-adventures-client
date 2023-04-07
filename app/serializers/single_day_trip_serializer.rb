class SingleDayTripSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :itinerary, :price, :image_url, :inclusions, :exclusions
end