class CulturalToursController < ApplicationController 
  before_action :set_cultural_tour, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index
    @cultural_tours = CulturalTour.all
    render json: @cultural_tours, status: :ok
  end

  def show
    render json: @cultural_tour,  status: :ok
  end

  def create
    @cultural_tour = CulturalTour.create!(cultural_tour_params)
    render json: @cultural_tour, status: :created
  end

  def update
    @cultural_tour.update!(cultural_tour_params)
    render json: @cultural_tour, status: :ok
  end

  def destroy
    @cultural_tour.destroy!
    render json: { message: "#{@cultural_tour.name} has been deleted." }, status: :ok
  end

  private

  def cultural_tour_params
    params.require(:cultural_tour).permit(:name, :description, :location, :itinerary, :price, :image_url, :inclusions, :exclusions)
  end

  def set_cultural_tour
    @cultural_tour = CulturalTour.find(params[:id])
  end

end
