class BlogSerializer < ActiveModel::Serializer
  attributes  :image_url, :id, :title ,:content ,:author ,:created_at ,:updated_at
end
