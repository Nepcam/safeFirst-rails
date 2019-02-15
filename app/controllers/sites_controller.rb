class SitesController < ApplicationController
  before_action :authenticate_user!

  def index
    render json: { sites: current_user.sites.as_json }
  end

  def create
    site = current_user.sites.build(site_params)

    if current_user.save
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
