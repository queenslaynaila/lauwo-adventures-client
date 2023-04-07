class SingleBlogSerializer < ActiveModel::Serializer 
  attributes :id, :title, :content, :author, :image_url,:created_at
end