import * as ErrorsAction from '../actions/errors_actions';
import * as APIUtil from '../util/api_util';
export const RECEIVE_BADGES = "RECEIVE_BADGES";


export const fetchBadges = (token) => (dispatch) => {
  return (
    APIUtil.getBadges(token).then(
      badges => {
      dispatch(receiveBadges(badges));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveBadges = (badges) => {
  return ({
    type: RECEIVE_BADGES,
    badges
  });
};
