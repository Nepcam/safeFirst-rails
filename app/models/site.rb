class Site < ApplicationRecord
  validates_presence_of :name, :location

  has_many :site_logins
  has_many :users, through: :site_logins
end
