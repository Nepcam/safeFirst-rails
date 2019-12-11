require 'rails_helper'

RSpec.describe HazardsController do
  let(:user) { create(:user) }
  let(:site) { create(:site) }
  let(:headers) { { 'Accept' => 'application/json', 'Content-Type' => 'application/json' } }
  let(:auth_headers) { Devise::JWT::TestHelpers.auth_headers(headers, user) }

  describe 'GET #index' do
    let(:extract_id) { -> (h) { h['id'] } }

    before do
      request.headers.merge! auth_headers
      2.times do
        create(:hazard, site: site)
        create(:hazard)
      end
    end

    it 'returns all hazards tied to a specific site' do
      get :index, params: { site_id: site.id }
      result = JSON.parse(response.body)

      expect(result.count).to eq(2)
      expect(result.map(&extract_id)).to eq(Hazard.where(site: site).pluck(:id))
    end

    it 'returns success response' do
      get :index, params: { site_id: site.id }

      expect(response).to have_http_status(:ok)
    end

    it 'includes generic hazards, not tied to a site' do
      create(:hazard, site: nil)

      get :index, params: { site_id: site.id }
      result = JSON.parse(response.body)

      expect(result.count).to eq(3)
      expect(result.map(&extract_id)).to eq(Hazard.where(site: [site, nil]).pluck(:id))
    end
  end

  describe 'POST #create' do
    subject { post :create, params: { site_id: site.id, hazard: { name: 'test', control: 'test', risk: '1', hazard_control_method_id: '1', hazard_category_id: '1' } } }

    before do
      request.headers.merge! auth_headers
      create(:hazard_category)
      create(:hazard_control_method)
    end

    it 'creates a hazard' do
      expect { subject }.to change { Hazard.count }.by 1
    end
  end
end
