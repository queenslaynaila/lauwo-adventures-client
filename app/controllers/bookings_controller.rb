class BookingsController < ApplicationController
  before_action :set_booking, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: [:update, :destroy]

  # GET /bookings
  def index
    @bookings = Booking.all

    render json: @bookings
  end

  # GET /bookings/1
  def show
    render json: @booking
  end

  # POST /bookings
  def create
    @booking = Booking.new(booking_params)

    if @booking.save
      render json: { message: 'Booking was successful.' }, status: :created, location: @booking
    else
      render json: { errors: @booking.errors.full_messages }, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /bookings/1
  def update
    if @booking.update(booking_params)
      render json: @booking
    else
      render json: @booking.errors, status: :unprocessable_entity
    end
  end

  # DELETE /bookings/1
  def destroy
    @booking.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_booking
      @booking = Booking.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def booking_params
      params.require(:booking).permit(:first_name, :last_name, :email, :phone_number, :country, :travel_period, :no_of_travellers, :additional_info, :no_of_adults, :no_of_children, :no_of_small_children, :bookable_type, :bookable_id)
    end
end
