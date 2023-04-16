class MountainsController < ApplicationController
  before_action :set_mountain, only: %i[ show update destroy ]
  before_action :authenticate_user!, only: [:create, :update, :destroy]

  # GET /mountains
  def index
    @mountains = Mountain.all

    render json: @mountains
  end

  # GET /mountains/1
  def show
    render json: @mountain
  end

  # POST /mountains
  def create
    @mountain = Mountain.new(mountain_params)

    if @mountain.save
      render json: @mountain, status: :created, location: @mountain
    else
      render json: @mountain.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /mountains/1
  def update
    if @mountain.update(mountain_params)
      render json: @mountain
    else
      render json: @mountain.errors, status: :unprocessable_entity
    end
  end

  # DELETE /mountains/1
  def destroy
    @mountain.destroy
    render json: { message: "Mountain was successfully deleted." }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_mountain
      @mountain = Mountain.find(params[:id])
    rescue ActiveRecord::RecordNotFound
      render json: { error: "Mountain not found" }, status: :not_found
    end


    # Only allow a list of trusted parameters through.
    def mountain_params
      params.require(:mountain).permit(:mountain_name, :description)
    end
end
