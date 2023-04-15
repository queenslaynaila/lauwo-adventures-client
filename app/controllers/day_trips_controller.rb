class DayTripsController < ApplicationController
  before_action :set_day_trip, only: [:show, :update, :destroy]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  def index 
    @day_trips = DayTrip.all
    render json: @day_trips, status: :ok
  end

  def show
    render json: @day_trip, serializer: SingleDayTripSerializer, status: :ok
  end

  def create
    @day_trip = DayTrip.create!(day_trip_params)
    render json: @day_trip, status: :created
  end

  def update
    @day_trip.update(day_trip_params)
    render json: @day_trip, status: :ok
  end

  def destroy
    @day_trip.destroy
    render json: { message: "#{@day_trip.name} has been deleted" }, status: :ok
  end

  private

  def set_day_trip
    @day_trip = DayTrip.find(params[:id])
  end

  def day_trip_params
    params.permit(:name, :description, :itinerary, :price, :image_url, :inclusions, :exclusions)
  end

end
