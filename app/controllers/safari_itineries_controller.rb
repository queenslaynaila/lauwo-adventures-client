class SafariItineriesController < ApplicationController
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response

    # GET
    def index
      safari_itineries = SafariItinery.all
      render json: safari_itineries
    end

    # POST
    def create
      safari_itinery = SafariItinery.create(safari_itinery_params)
      render json: safari_itinery, status: :created
    end

    # GET
    def show
      safari_itinery = find_safari_itinery
      render json: @safari_itinery
    end

    # PATCH
    def update
      safari = find_safari_itinery
      safari.update(safari_itinery_params)
      render json: safari
    end



    # DELETE /safaris/:i
    def destroy
      safari_itinery = find_safari_itinery
      safari_itinery.destroy
      render json: {message: "Safari Itinery deleted"}
    end

    private
    def find_safari_itinery
      SafariItinery.find(params[:id])
    end

    def safari_itinery_params
      params.permit(:day, :title, :description, :mealplan, :image_url, :safari_id)
    end

    def render_not_found_response
      render json: { error: "Safari Itinery not found" }, status: :not_found
    end
end
