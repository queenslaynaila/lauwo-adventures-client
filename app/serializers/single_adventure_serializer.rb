class SingleAdventureSerializer < ActiveModel::Serializer 
  attributes :id, :name
  has_many :mountains
  has_many :day_trips
  has_many :cultural_tours
  
end