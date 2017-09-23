require 'net/http'
require 'net/https'
require 'uri'
require 'json'

class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
      token, expiration = get_token
      @user.update_attribute(:api_access_token, token)
      @user.update_attribute(:access_token_expiration, expiration)
    if @user
      login!(@user)
      render "api/users/show"
    else
      render json: ["Invalid credentials"], status: 401
    end
  end

  def destroy
    if loggedin?
      log_out
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end

private

def get_token
  uri = URI.parse('https://api.wonolo.com/')
  http = Net::HTTP.new(uri.host, uri.port)
  http.use_ssl = true
  http.ssl_version = :SSLv23
  http.verify_mode = OpenSSL::SSL::VERIFY_NONE
  request = Net::HTTP::Post.new("/api_v2/authenticate")
  request.add_field('Content-Type', 'application/json')
  request.body = ({'api_key' => 'pk_live_VnKYnuDhqnx8fbg31jsS', 'secret_key' => 'sk_live_L2utzUTS3T2yEaN1YMYX'}).to_json
  response = http.request(request)
  ans = [JSON.parse(response.body)["token"], JSON.parse(response.body)["expires_at"]]
end
