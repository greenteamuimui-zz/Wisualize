import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const BadgeBox = ({indivbadge}) => {
  console.log("here");
  return (
    <div>
      <h2>{indivbadge.name}</h2>
      <img src={indivbadge.icon_url} />
    </div>
  );
};

export default BadgeBox;
