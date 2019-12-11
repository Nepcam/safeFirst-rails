class HazardsController < ApplicationController
  before_action :authenticate_user!, only: :index

  def all
    hazards = paginate Hazard.includes(:hazard_control_method, :hazard_category).all
    render json: hazards.as_json(hazards_json_keys)
  end

  def index
    hazards = paginate Hazard.includes(:hazard_control_method, :hazard_category).where(site_id: [params[:site_id], nil])
    render json: hazards.as_json(hazards_json_keys)
  end

  def create
    site = Site.find(params[:site_id])
    site.hazards.build(hazard_params)
    site.save
  end

  private

  def hazards_json_keys
    { only:    [:id, :name, :control, :risk, :site_id],
      include: {
        hazard_control_method: { only: [:id, :name] },
        hazard_category:       { only: [:id, :name] }
      }
    }
  end

  def hazard_params
    params.require(:hazard).permit(:name, :risk, :control, :hazard_control_method_id, :hazard_category_id)
  end
end
