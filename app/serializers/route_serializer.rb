class RouteSerializer < ActiveModel::Serializer
  attributes :id, :route_name, :description, :image_URL, :durations
  has_many :route_durations

  def durations
    object.route_durations.pluck(:duration_days)
  end
end
