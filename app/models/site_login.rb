class SiteLogin < ApplicationRecord
  belongs_to :user
  belongs_to :site
end
