class PlanningformsController < ApplicationController
  before_action :set_planningform, only: %i[ show update destroy ]

  # GET /planningforms
  def index
    @planningforms = Planningform.all

    render json: @planningforms
  end

  # GET /planningforms/1
  def show
    render json: @planningform
  end

  # POST /planningforms
  def create
    @planningform = Planningform.new(planningform_params)

    if @planningform.save
      render json: { status: "success", location: @planningform }, status: :created
    else
      render json: { status: "error", errors: @planningform.errors }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /planningforms/1
  def update
    if @planningform.update(planningform_params)
      render json: @planningform
    else
      render json: @planningform.errors, status: :unprocessable_entity
    end
  end

  # DELETE /planningforms/1
  def destroy
    @planningform.destroy
    render json: { message: "Planning form was successfully deleted." }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_planningform
      @planningform = Planningform.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def planningform_params
      params.require(:planningform).permit(:adventure, :first_name, :last_name, :email, :phone_number, :country_of_residence, :tour_duration_in_days, :budget, :when_to_travel, :how_many_travelers, :no_of_adults, :no_of_children)
    end
end
