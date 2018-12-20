class SitesController < ApplicationController
  before_action :authenticate_user!

  def create
    site = current_user.sites.new(site_params)
    
    if site.save
      render json: { site: site.as_json }
    else
      render json: { errors: site.errors.full_messages }, status: :bad_request
    end
  end

  private

  def site_params
    params.require(:site).permit(:name, :location)
  end
end
