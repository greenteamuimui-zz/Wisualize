import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import {getBadges} from '../../util/badges_util';
import BadgeBox from './badge';


class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      badges: []
    };
  }

  componentDidMount() {
    getBadges(this.props.currentUser.api_access_token).then(
      data => this.setState({
        badges: data.badges
      }));
    }

  render(){
    let badges;
    if (this.state.badges.length === 0){
      return(
        <div>
          <h1>Badges</h1>
            <h2>Loading</h2>
        </div>);
    } else {
    return(
      <div>
        <h1>Badges</h1>
          {this.state.badges.map((indivbadge, idx) => <BadgeBox indivbadge={indivbadge} key={idx} />)}
      </div>
    );
  }}
}
          //
          // {this.state.badges.map((indivbadge, idx) => <badgeBox indivbadge={indivbadge} key={idx} />)}

export default withRouter(MainPage);
