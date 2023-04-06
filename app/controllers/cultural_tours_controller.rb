class CulturalToursController < ApplicationController 
  before_action :set_cultural_tour, only: [:show, :update, :destroy]

  def index
    @cultural_tours = CulturalTour.all
    render json: @cultural_tours
  end

  def show
    render json: @cultural_tour, serializer: SingleCulturalTourSerializer
  end

  def create
    @cultural_tour = CulturalTour.create!(cultural_tour_params)
    render json: @cultural_tour
  end

  def update
    @cultural_tour.update!(cultural_tour_params)
    render json: @cultural_tour
  end

  def destroy
    @cultural_tour.destroy!
    render json: @cultural_tour
  end

  private

  def cultural_tour_params
    params.require(:cultural_tour).permit(:name, :description, :location, :itinerary, :price, :image_url, :inclusions, :exclusions)
  end

  def set_cultural_tour
    @cultural_tour = CulturalTour.find(params[:id])
  end

end
