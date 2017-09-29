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
