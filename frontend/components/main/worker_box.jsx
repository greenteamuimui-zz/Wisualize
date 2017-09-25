import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const WorkerBox = ({worker, badges}) => {
  let badgesId = worker.user_badges.map((badge) => badge.badge_id);
  let badgesHash = badges.badges.reduce((map, obj) => {
    map[obj.id] = obj.icon_url;
    return map;
  }, {});
  let badgesUrl = [];
  for (var i = 0; i < badgesId.length; i++) {
    badgesUrl.push(badgesHash[badgesId[i]]);
  }
  let rating = worker.rating === null ? "None" : worker.rating.slice(0, 4);
  return (
    <div className="indivworker">
      <div className="workerleft">
        <img className="picture" src={worker.avatar_url} />
        <h2>{worker.first_name}</h2>
        <h3>Rating: {rating}</h3>
      </div>
      <div className="workerright">
        {badgesUrl.map((url, idx) => <img className="badge" src={url} key={idx}/>)}
      </div>
    </div>
  );
};

export default WorkerBox;
