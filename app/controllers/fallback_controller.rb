# redirect  to client side app which is a next.js app
class FallbackController < ActionController::Base
  def index
    render file: 'src/pages/index.js'
  end
end

