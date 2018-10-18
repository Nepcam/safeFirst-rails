class CreateHazards < ActiveRecord::Migration[5.2]
  def change
    create_table :hazards do |t|
      t.integer :hazard_control_method_id, null: false
      t.integer :hazard_category_id, null: false
      t.integer :reference_number
      t.string :name
      t.string :control
      t.integer :risk, default: 0

      t.timestamps
    end
  end
end
