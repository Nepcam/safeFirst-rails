class AddTimestampsToSites < ActiveRecord::Migration[5.2]
  def change
    add_timestamps(:sites, null: false, default: DateTime.now)
  end
end
