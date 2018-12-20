class HazardsController < ApplicationController
  before_action :authenticate_user!, only: :index

  def all
    hazards = paginate Hazard.includes(:hazard_control_method, :hazard_category).all
    render json: hazards.as_json(hazards_json_keys)
  end

  def index
    hazards = paginate Hazard.includes(:hazard_control_method, :hazard_category).where(site_id: params[:site_id])
    render json: hazards.as_json(hazards_json_keys)
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
end
