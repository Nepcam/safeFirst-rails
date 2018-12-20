FactoryBot.define do
  factory :hazard do
    site
    hazard_category
    hazard_control_method
    reference_number { 354 }
    name { "Logging traffic and oversize logging trucks" }
    control { "Machines to use signage and headlights at all time..." }
  end
end
