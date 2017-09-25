import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import BadgeBox from './badge';
import WonoloersListContainer from './wonoloers_list_container';


class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {
    // getBadges(this.props.currentUser.api_access_token).then(
    //   data => this.setState({
    //     badges: data.badges
    //   }));
    this.props.fetchBadges(this.props.currentUser.api_access_token);
    }

  render(){
    if (!this.props.badges) {
      return null;
    } else {
    let badges = this.props.badges.badges;
    return(
      <div>
      <div className="badgebox">
        <h1>Badges</h1>
          {badges.map((indivbadge, idx) => <BadgeBox indivbadge={indivbadge} key={idx} />)}
      </div>
      <WonoloersListContainer />
    </div>
    );
  }
  }
}

export default withRouter(MainPage);
