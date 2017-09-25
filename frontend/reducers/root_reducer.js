import {combineReducers} from 'redux';
import currentUserReducer from './currentUser_reducer';
import badgesReducer from './badges_reducer';
import usersReducer from './users_reducer';
import ErrorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  currentUser: currentUserReducer,
  badges: badgesReducer,
  errors: ErrorsReducer,
  users: usersReducer
});

export default rootReducer;
