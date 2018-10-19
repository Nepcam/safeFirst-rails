class CreateHazardControlMethods < ActiveRecord::Migration[5.2]
  def change
    create_table :hazard_control_methods do |t|
      t.string :name

      t.timestamps
    end
  end
end
