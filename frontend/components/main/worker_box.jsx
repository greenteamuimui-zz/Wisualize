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
  let avatar = worker.avatar_url === null ? "/assets/icon.png" : worker.avatar_url;
  let message;
  if (badgesUrl.length === 0) {
    message = <img className="in-progress" src="/assets/in_progress.jpg"/>;
  } else {
    message = "";
  }
  return (
    <div className="indivworker">
      <div className="workerleft">
        <img className="picture" src={avatar} />
        <h2>{worker.first_name}</h2>
        <h3>Rating: {rating}</h3>
      </div>
      <div className="workerright">
        {message}
        {badgesUrl.map((url, idx) => <img className="badge" src={url} key={idx}/>)}
      </div>
    </div>
  );
};

export default WorkerBox;
