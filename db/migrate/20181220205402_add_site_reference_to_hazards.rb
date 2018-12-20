class AddSiteReferenceToHazards < ActiveRecord::Migration[5.2]
  def change
    add_reference :hazards, :site, foreign_key: true
  end
end
