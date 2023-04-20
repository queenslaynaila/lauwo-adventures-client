class RouteDurationSerializer < ActiveModel::Serializer
 has_many :itineries
  attributes :id, :title, :duration_days, :standard_price,
             :premium_price, :standard_inclusive, :standard_exclusive,
             :premium_inclusive, :premium_exclusive,:route_name

  def route_name
    object.route.route_name
  end
end
