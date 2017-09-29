class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :loggedin?, :current_user

  def login!(user)
    @current_user = user
    session[:session_token] = user.reset_session_token!
  end

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def log_out
    @current_user.reset_session_token!
    session[:session_token] = nil
  end

  def loggedin?
    !current_user.nil?
  end

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
end
