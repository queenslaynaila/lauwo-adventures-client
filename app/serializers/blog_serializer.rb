class BlogSerializer < ActiveModel::Serializer
  attributes  :image_url, :id, :title ,:content ,:author ,:created_at ,:updated_at
  def created_at
    object.updated_at.strftime("%A %e %B %Y %l:%M %p")
  end

  def updated_at
    object.updated_at.strftime("%A %e %B %Y %l:%M %p")
  end
end
