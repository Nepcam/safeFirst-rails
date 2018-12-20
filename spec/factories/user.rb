FactoryBot.define do
  factory :user do
    name { "BeeGee" }
    email { "beegee@gmail.com" }
    password { "thinkbeyond" }
    password_confirmation { "thinkbeyond" }
  end
end