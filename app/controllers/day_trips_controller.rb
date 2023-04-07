class DayTripsController < ApplicationController
  before_action :set_day_trip, only: [:show, :update, :destroy]

  def index 
    @day_trips = DayTrip.all
    render json: @day_trips
  end

  def show
    render json: @day_trip, serializer: SingleDayTripSerializer
  end

  def create
    @day_trip = DayTrip.create!(day_trip_params)
    render json: @day_trip
  end

  def update
    @day_trip.update(day_trip_params)
    render json: @day_trip
  end

  def destroy
    @day_trip.destroy
    render json: @day_trip
  end

  private

  def set_day_trip
    @day_trip = DayTrip.find(params[:id])
  end

  def day_trip_params
    params.permit(:name, :description, :itinerary, :price, :image_url, :inclusions, :exclusions)
  end

end
