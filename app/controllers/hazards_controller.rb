class HazardsController < ApplicationController
  def index
    @hazards = paginate Hazard.includes(:hazard_control_method, :hazard_category).all
    render json: @hazards.as_json(only: [:name, :control, :risk], include: { hazard_control_method: { only: [:id, :name] }, hazard_category: { only: [:id, :name] }})
  end
end
