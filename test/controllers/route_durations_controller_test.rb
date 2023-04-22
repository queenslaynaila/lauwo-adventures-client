require "test_helper"

class RouteDurationsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @route_duration = route_durations(:one)
  end

  test "should get index" do
    get route_durations_url, as: :json
    assert_response :success
  end

  test "should create route_duration" do
    assert_difference("RouteDuration.count") do
      post route_durations_url, params: { route_duration: { duration_days: @route_duration.duration_days, exclusive: @route_duration.exclusive, inclusive: @route_duration.inclusive, price: @route_duration.price, route_id: @route_duration.route_id } }, as: :json
    end

    assert_response :created
  end

  test "should show route_duration" do
    get route_duration_url(@route_duration), as: :json
    assert_response :success
  end

  test "should update route_duration" do
    patch route_duration_url(@route_duration), params: { route_duration: { duration_days: @route_duration.duration_days, exclusive: @route_duration.exclusive, inclusive: @route_duration.inclusive, price: @route_duration.price, route_id: @route_duration.route_id } }, as: :json
    assert_response :success
  end

  test "should destroy route_duration" do
    assert_difference("RouteDuration.count", -1) do
      delete route_duration_url(@route_duration), as: :json
    end

    assert_response :no_content
  end
end
