require "test_helper"

class ItineriesControllerTest < ActionDispatch::IntegrationTest
  setup do
    @itinery = itineries(:one)
  end

  test "should get index" do
    get itineries_url, as: :json
    assert_response :success
  end

  test "should create itinery" do
    assert_difference("Itinery.count") do
      post itineries_url, params: { itinery: { accomodation: @itinery.accomodation, description: @itinery.description, distance: @itinery.distance, elevation: @itinery.elevation, image_URL: @itinery.image_URL, meals: @itinery.meals, routeduration_id: @itinery.routeduration_id, title: @itinery.title, vegatation: @itinery.vegatation } }, as: :json
    end

    assert_response :created
  end

  test "should show itinery" do
    get itinery_url(@itinery), as: :json
    assert_response :success
  end

  test "should update itinery" do
    patch itinery_url(@itinery), params: { itinery: { accomodation: @itinery.accomodation, description: @itinery.description, distance: @itinery.distance, elevation: @itinery.elevation, image_URL: @itinery.image_URL, meals: @itinery.meals, routeduration_id: @itinery.routeduration_id, title: @itinery.title, vegatation: @itinery.vegatation } }, as: :json
    assert_response :success
  end

  test "should destroy itinery" do
    assert_difference("Itinery.count", -1) do
      delete itinery_url(@itinery), as: :json
    end

    assert_response :no_content
  end
end
