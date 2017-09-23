# json.extract! @user, :id, :username, :api_access_token
json.partial! "api/users/user", user: @user
