class SafarisController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    before_action :authenticate_user!, only: [:create, :update, :destroy]


    # GET /safaris
    def index
      safaris = Safari.all
      render json: safaris
    end

    # POST /safaris
    def create
      safari = Safari.create(safari_params)
      render json: safari, status: :created
    end

    # GET /safaris/:id
    def show
      safari = find_safari
      render json: safari
    end

    # PATCH /safaris/:id
    def update
      safari = find_safari
      safari.update(safari_params)
      render json: safari
    end



    # DELETE /safaris/:id
    def destroy
      safari = find_safari
      safari.destroy
      render json: {message: "Safari deleted"}
    end

    private
    def find_safari
      Safari.find(params[:id])
    end

    def safari_params
      params.permit(:name, :duration, :image_url)
    end

    def render_not_found_response
      render json: { error: "safari not found" }, status: :not_found
    end

end
