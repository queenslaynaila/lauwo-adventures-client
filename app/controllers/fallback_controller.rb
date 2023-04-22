# app/controllers/fallback_controller.rb
class FallbackController < ActionController::Base
  def index
    render file: 'src/pages/_app.js'
  end
end