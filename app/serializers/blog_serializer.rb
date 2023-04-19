class BlogSerializer < ActiveModel::Serializer
  attributes  :image_url, :id, :title ,:content ,:author
end
