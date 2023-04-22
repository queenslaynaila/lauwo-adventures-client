# app/controllers/fallback_controller.rb
class FallbackController < ActionController::Base
  def index
    redirect_to '/client'
  end
end