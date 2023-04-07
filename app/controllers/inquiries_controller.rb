class InquiriesController < ApplicationController
  before_action :set_inquiry, only: [:show, :edit, :update, :destroy]

  def index
    @inquiries = Inquiry.all
    render json: @inquiries, status: :ok
  end

  def show
    render json: @inquiry, status: :ok
  end

  def create
    @inquiry = Inquiry.create!(inquiry_params)
    render json: @inquiry, status: :ok
  end

  def update 
    @inquiry.update!(inquiry_params)
    render json: @inquiry, status: :ok
  end

  def destroy
    @inquiry.destroy
    render json: {message: "Inquiry deleted"}, status: :ok
  end

  private

  def set_inquiry
    @inquiry = Inquiry.find(params[:id])
  end

  def inquiry_params
    params.permit(:name, :email, :message)
  end

end
