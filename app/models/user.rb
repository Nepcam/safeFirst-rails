class User < ApplicationRecord
  devise :database_authenticatable, :registerable, :validatable,
         :recoverable, :jwt_authenticatable, jwt_revocation_strategy: JWTBlacklist

  validates :name, presence: true
end
