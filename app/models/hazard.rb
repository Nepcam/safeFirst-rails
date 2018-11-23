class Hazard < ApplicationRecord
  belongs_to :hazard_category
  belongs_to :hazard_control_method
end
