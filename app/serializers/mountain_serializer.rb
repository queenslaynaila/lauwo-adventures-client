class MountainSerializer < ActiveModel::Serializer
  attributes :id, :mountain_name, :description, :overview, :image_url
  has_many :routes 

  
end
