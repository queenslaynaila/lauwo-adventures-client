require "test_helper"

class PlanningformsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @planningform = planningforms(:one)
  end

  test "should get index" do
    get planningforms_url, as: :json
    assert_response :success
  end

  test "should create planningform" do
    assert_difference("Planningform.count") do
      post planningforms_url, params: { planningform: { adventure: @planningform.adventure, budget: @planningform.budget, country_of_residence: @planningform.country_of_residence, email: @planningform.email, first_name: @planningform.first_name, how_many_travelers: @planningform.how_many_travelers, last_name: @planningform.last_name, no_of_adults: @planningform.no_of_adults, no_of_children: @planningform.no_of_children, phone_number: @planningform.phone_number, tour_duration_in_days: @planningform.tour_duration_in_days, when_to_travel: @planningform.when_to_travel } }, as: :json
    end

    assert_response :created
  end

  test "should show planningform" do
    get planningform_url(@planningform), as: :json
    assert_response :success
  end

  test "should update planningform" do
    patch planningform_url(@planningform), params: { planningform: { adventure: @planningform.adventure, budget: @planningform.budget, country_of_residence: @planningform.country_of_residence, email: @planningform.email, first_name: @planningform.first_name, how_many_travelers: @planningform.how_many_travelers, last_name: @planningform.last_name, no_of_adults: @planningform.no_of_adults, no_of_children: @planningform.no_of_children, phone_number: @planningform.phone_number, tour_duration_in_days: @planningform.tour_duration_in_days, when_to_travel: @planningform.when_to_travel } }, as: :json
    assert_response :success
  end

  test "should destroy planningform" do
    assert_difference("Planningform.count", -1) do
      delete planningform_url(@planningform), as: :json
    end

    assert_response :no_content
  end
end
