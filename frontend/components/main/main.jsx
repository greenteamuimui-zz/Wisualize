import React from 'react';
import {Link, withRouter } from 'react-router-dom';
import BadgeBox from './badge';
import WonoloersListContainer from './wonoloers_list_container';
import JobsMap from './jobs_map';


class MainPage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchBadges(this.props.currentUser.api_access_token);
    this.props.fetchJobs(this.props.currentUser.api_access_token, 1);
  }

  handleSubmit (e) {
    this.props.fetchJobs(this.props.currentUser.api_access_token, Math.floor(Math.random()*20) + 1);
  }

  render(){
    if (!this.props.badges) {
      return null;
    } else {
    let badges = this.props.badges.badges;
    return(
    <div className="main">
      <div className="mainleft">
        <h1>Badges</h1>
        <div className="badgebox">
            {badges.map((indivbadge, idx) => <BadgeBox indivbadge={indivbadge} key={idx} />)}
        </div>
        <div className="jobs">
        <JobsMap jobs={this.props.jobs} />
          <div className="next" onClick={this.handleSubmit}>
              <i id="next" className="material-icons">location_searching</i><h3 id="next">Get Random Jobs</h3>
          </div>
        </div>
      </div>
      <div className="wonoloers">
        <WonoloersListContainer />
      </div>
    </div>
    );
  }
  }
}

export default withRouter(MainPage);
