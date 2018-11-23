Rails.application.routes.draw do
  devise_for :users, defaults: { format: :json }

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "home#index"
  get '/dashboard', to: 'dashboard#index'
  resources :sites, only: :create
  resources :hazards, only: [:index]
end
