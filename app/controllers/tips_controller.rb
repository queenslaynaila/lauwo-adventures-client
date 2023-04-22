class TipsController < ApplicationController
  before_action :set_tip, only: [:show, :edit, :update, :destroy]

  def index
    @tips = Tip.all
    render json: @tips, status: :ok
  end

  def show
    render json: @tip, status: :ok
  end

  def create
    @tip = Tip.create!(tip_params)
    render json: @tip, status: :created
  end

  def update
    @tip.update!(tip_params)
    render json: @tip, status: :ok
  end

  def destroy
    @tip.destroy
    render json: {message: "Tip deleted"}, status: :_no_content
  end

  private

  def set_tip
    @tip = Tip.find(params[:id])
  end

  def tip_params
    params.permit(:title, :content)
  end
end
