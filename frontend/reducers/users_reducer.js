import {RECEIVE_USERS} from '../actions/users_actions';

const usersReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_USERS:
      newState = action.users;
      return newState;
    default:
      return state;
  }
};

export default usersReducer;
