class Admins::SessionsController < Devise::SessionsController
  respond_to :json
  private
  def respond_with(resource, _opts = {})
    render json: { message: 'Logged in succesfully' }, status: :ok
  end
  def respond_to_on_destroy
    current_admin ? log_out_success : log_out_failure
  end
  def log_out_success
    render json: { message: "Successfully Logged out" }, status: :ok
  end
  def log_out_failure
    render json: { message: "Failed to log out"}, status: :unprocessable_entity
  end
end