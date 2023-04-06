class AdventuresController < ApplicationController
  before_action :set_adventure, only: [:show, :update, :destroy]

  def index
    @adventures = Adventure.all
    render json: @adventures
  end

  def show
    render json: @adventure
  end

  def create
    @adventure = Adventure.create!(adventure_params)
    render json: @adventure
  end

  def update
    @adventure.update!(adventure_params)
    render json: @adventure
  end

  def destroy
    @adventure.destroy!
    render json: @adventure
  end

  private

  def adventure_params
    params.permit(:name)
  end

  def set_adventure
    @adventure = Adventure.find(params[:id])
  end

end
