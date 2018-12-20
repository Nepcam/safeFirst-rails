class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable,
         :recoverable, :jwt_authenticatable, jwt_revocation_strategy: JWTBlacklist

  validates :name, presence: true
  has_many :site_logins
  has_many :sites, through: :site_logins
end
