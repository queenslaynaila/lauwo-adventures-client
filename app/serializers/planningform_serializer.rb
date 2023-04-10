class PlanningformSerializer < ActiveModel::Serializer
  attributes :id, :adventure, :first_name, :last_name, :email, :phone_number, :country_of_residence, :tour_duration_in_days, :budget, :when_to_travel, :how_many_travelers, :no_of_adults, :no_of_children
end
