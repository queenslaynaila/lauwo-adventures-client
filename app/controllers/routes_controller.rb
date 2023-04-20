class RoutesController < ApplicationController
  before_action :set_route, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /routes
  def index
    routes = Route.all

    render json: routes, include: :route_durations
  end

  # GET /routes/1
  def show
    render json: @route
  end

  # POST /routes
  def create
    @route = Route.new(route_params)

    if @route.save
      render json: @route, status: :created, location: @route
    else
      render json: @route.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /routes/1
  def update
    if @route.update(route_params)
      render json: @route
    else
      render json: @route.errors, status: :unprocessable_entity
    end
  end

  # DELETE /routes/1
  def destroy
    @route.destroy
    render json: { message: "Route was successfully deleted." }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_route
      @route = Route.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Route not found" }, status: :not_found
    end

    # Only allow a list of trusted parameters through.
    def route_params
      params.require(:route).permit(:route_name, :mountain_id)
    end
end
