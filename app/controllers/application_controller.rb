class ApplicationController < ActionController::API
  respond_to :json
  include ActionController::MimeResponds

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

  def index
    render json: { message: 'Lauwo Adventures API' }
  end

  private 

  def render_unprocessable_entity_response(exception)
    render json: { errors: exception.record.errors }, status: :unprocessable_entity
  end

  def render_not_found_response(exception)
    render json: { errors: exception.model + ' not found' }, status: :not_found
  end
end
