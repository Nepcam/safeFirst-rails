require 'csv'    
require 'byebug'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# HazardCategories
csv_text = File.read(Rails.root.join('db', 'seed_data', 'HazardCategories.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
  HazardCategory.find_or_create_by!(row.to_hash)
end

#Control methods
HazardControlMethod.find_or_create_by!(name: 'Eliminate')
HazardControlMethod.find_or_create_by!(name: 'Isolate')
HazardControlMethod.find_or_create_by!(name: 'Minimise')

#Hazards
csv_text = File.read(Rails.root.join('db', 'seed_data', 'Hazards.csv'))
csv = CSV.parse(csv_text, :headers => true)
csv.each do |row|
    next if Hazard.exists?(reference_number: row['reference_number'])

    hazard = Hazard.new(row.to_hash.slice('name','reference_number','control','risk'))

    hazard_category = HazardCategory.find_by(name: row['category'])
    hazard_control_method = HazardControlMethod.find_by(name: row['hazard_control_method'])

    puts row if hazard_control_method == nil

    hazard.hazard_control_method = hazard_control_method
    hazard.hazard_category = hazard_category

    hazard.save! 

end