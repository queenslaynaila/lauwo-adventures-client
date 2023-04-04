require "test_helper"

class MountainsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @mountain = mountains(:one)
  end

  test "should get index" do
    get mountains_url, as: :json
    assert_response :success
  end

  test "should create mountain" do
    assert_difference("Mountain.count") do
      post mountains_url, params: { mountain: { description: @mountain.description, mountain_name: @mountain.mountain_name } }, as: :json
    end

    assert_response :created
  end

  test "should show mountain" do
    get mountain_url(@mountain), as: :json
    assert_response :success
  end

  test "should update mountain" do
    patch mountain_url(@mountain), params: { mountain: { description: @mountain.description, mountain_name: @mountain.mountain_name } }, as: :json
    assert_response :success
  end

  test "should destroy mountain" do
    assert_difference("Mountain.count", -1) do
      delete mountain_url(@mountain), as: :json
    end

    assert_response :no_content
  end
end
