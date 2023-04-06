class ItineriesController < ApplicationController
  before_action :set_itinery, only: %i[ show update destroy ]

  # GET /itineries
  def index
    @itineries = Itinery.all

    render json: @itineries
  end

  # GET /itineries/1
  def show
    render json: @itinery
  end

  # POST /itineries
  def create
    @itinery = Itinery.new(itinery_params)

    if @itinery.save
      render json: @itinery, status: :created, location: @itinery
    else
      render json: @itinery.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /itineries/1
  def update
    if @itinery.update(itinery_params)
      render json: @itinery
    else
      render json: @itinery.errors, status: :unprocessable_entity
    end
  end

  # DELETE /itineries/1
  def destroy
    @itinery.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_itinery
      @itinery = Itinery.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def itinery_params
      params.require(:itinery).permit(:routeduration_id, :title, :description, :meals, :distance, :image_URL, :accomodation, :vegatation, :elevation)
    end
end
