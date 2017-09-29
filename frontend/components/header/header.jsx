import React from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends React.Component {
  constructor (props) {
    super(props);
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.loggedIn && nextProps.loggedIn) {
      this.props.history.push('/main');
    }
  }

  render () {
    if (this.props.currentUser) {
      return (
        <div className="header-afterlogin">
            <h1>Welcome {this.props.currentUser.username}!</h1>
            <a onClick={this.props.logout}>Log Out</a>
        </div>
      );
    } else {
      return (
        <div className="header-beforelogin">
          <a onClick={() => this.props.logInAsGuest({
            username: "Guest",
            password: "123456"
          })}>
          Guest Log In
          </a>
          <Link to="/signup">
            Sign Up
          </Link>
          <Link to="/login">
            Log In
          </Link>
        </div>
      );
    }
  }
}


export default withRouter(Header);
