class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    token, expiration = get_token
    @user.update_attribute(:api_access_token, token)
    @user.update_attribute(:access_token_expiration, expiration)
    if @user.save
      login!(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password)
  end

end
