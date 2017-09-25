import {RECEIVE_JOBS} from '../actions/jobs_actions';

const jobsReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_JOBS:
      newState = action.jobs;
      return newState;
    default:
      return state;
  }
};

export default jobsReducer;
