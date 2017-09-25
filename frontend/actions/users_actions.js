import * as ErrorsAction from '../actions/errors_actions';
import * as APIUtil from '../util/api_util';
export const RECEIVE_USERS = "RECEIVE_USERS";


export const fetchUsers = (token, page) => (dispatch) => {
  return (
    APIUtil.getUsers(token, page).then(
      users => {
      dispatch(receiveUsers(users));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveUsers = (users) => {
  return ({
    type: RECEIVE_USERS,
    users
  });
};
