class RouteDurationsController < ApplicationController
  before_action :set_route_duration, only: %i[ show update destroy ]

  # GET /route_durations
  def index
    @route_durations = RouteDuration.all

    render json: @route_durations
  end

  # GET /route_durations/1
  def show
    render json: @route_duration
  end

  # POST /route_durations
  def create
    @route_duration = RouteDuration.new(route_duration_params)

    if @route_duration.save
      render json: @route_duration, status: :created, location: @route_duration
    else
      render json: @route_duration.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /route_durations/1
  def update
    if @route_duration.update(route_duration_params)
      render json: @route_duration
    else
      render json: @route_duration.errors, status: :unprocessable_entity
    end
  end

  # DELETE /route_durations/1
  def destroy
    @route_duration.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_route_duration
      @route_duration = RouteDuration.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def route_duration_params
      params.require(:route_duration).permit(:route_id, :duration_days, :price, :inclusive, :exclusive)
    end
end
