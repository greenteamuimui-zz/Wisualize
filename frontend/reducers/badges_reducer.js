import {RECEIVE_BADGES} from '../actions/badges_actions';

const badgesReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BADGES:
      newState = action.badges;
      return newState;
    default:
      return state;
  }
};

export default badgesReducer;
