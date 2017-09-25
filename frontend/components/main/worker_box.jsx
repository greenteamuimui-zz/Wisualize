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
    <div className="indivBadge">
      <h2>{worker.first_name}</h2>
      <img src={worker.avatar_url} />
      <h3>{rating}</h3>
      {badgesUrl.map((url, idx) => <img src={url} key={idx}/>)}
    </div>
  );
};

export default WorkerBox;
