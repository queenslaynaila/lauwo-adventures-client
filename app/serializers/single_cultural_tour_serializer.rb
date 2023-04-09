class SingleCulturalTourSerializer < ActiveModel::Serializer 
  attributes :id, :name , :location, :image_url, :price, :description, :itinerary, :inclusions, :exclusions
end