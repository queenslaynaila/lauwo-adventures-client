class FrequentlyAskedQuestionsController < ApplicationController
  before_action :set_frequently_asked_question, only: [:show, :update, :destroy]

  def index
    @frequently_asked_questions = FrequentlyAskedQuestion.all
    render json: @frequently_asked_questions, status: :ok
  end

  def show
    render json: @frequently_asked_question, status: :ok
  end

  def create
    @frequently_asked_question = FrequentlyAskedQuestion.create!(frequently_asked_question_params)
    render json: @frequently_asked_question, status: :created
  end

  def update
    @frequently_asked_question.update!(frequently_asked_question_params)
    render json: @frequently_asked_question, status: :ok
  end

  def destroy
    @frequently_asked_question.destroy
    render json: { message: 'Frequently Asked Question deleted successfully' }, status: :ok
  end

  private

  def set_frequently_asked_question
    @frequently_asked_question = FrequentlyAskedQuestion.find(params[:id])
  end

  def frequently_asked_question_params
    params.permit(:question, :answer)
  end
end
