class InquirySerializer < ActiveModel::Serializer
  attributes :id, :name, :email, :message
end
