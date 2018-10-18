class CreateHazards < ActiveRecord::Migration[5.2]
  def change
    create_table :hazards do |t|
      t.number, :reference_number
      t.string, :name
      t.string :control
      t.number :risk

      t.timestamps
    end
  end
end
