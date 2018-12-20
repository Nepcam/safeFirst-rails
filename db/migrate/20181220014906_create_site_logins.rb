class CreateSiteLogins < ActiveRecord::Migration[5.2]
  def change
    create_table :site_logins do |t|
      t.references :user, foreign_key: true
      t.references :site, foreign_key: true
      t.datetime :logged_in_at
      t.datetime :logged_out_at

      t.timestamps
    end
  end
end
