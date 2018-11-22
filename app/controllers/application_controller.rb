class ApplicationController < ActionController::Base
  include ActionController::MimeResponds

  protect_from_forgery unless: -> { request.format.json? }
  respond_to :json
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected

  def configure_permitted_parameters
    # Permit the `subscribe_newsletter` parameter along with the other
    # sign up parameters.
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name, :contact_number, :home_address])
  end
end
