class Admins::RegistrationsController < Devise::RegistrationsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    resource.persisted? ? register_success : register_failed
  end
  def register_success
    render json: { message: 'Signed up successfuly.' }, status: :ok
  end
  def register_failed
    render json: { message: "Failed to Sign Up" }, status: :unprocessable_entity
  end
end