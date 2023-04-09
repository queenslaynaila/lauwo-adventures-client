class AdventuresController < ApplicationController
  before_action :set_adventure, only: [:show, :update, :destroy]

  def index
    @adventures = Adventure.all
    render json: @adventures, status: :ok
  end

  def show
    render json: @adventure, serializer: SingleAdventureSerializer, status: :ok
  end

  def create
    @adventure = Adventure.create!(adventure_params)
    render json: @adventure, status: :created
  end

  def update
    @adventure.update!(adventure_params)
    render json: @adventure, status: :ok
  end

  def destroy
    @adventure.destroy!
    render json: { message: "#{@adventure.name} has been deleted" }, status: :ok
  end

  private

  def adventure_params
    params.require(:adventure).permit(:name)
  end

  def set_adventure
    @adventure = Adventure.find(params[:id])
  end

end
