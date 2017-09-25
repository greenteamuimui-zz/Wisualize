import * as ErrorsAction from '../actions/errors_actions';
import * as APIUtil from '../util/api_util';
export const RECEIVE_JOBS = "RECEIVE_JOBS";


export const fetchJobs = (token, page) => (dispatch) => {
  console.log(page);
  return (
    APIUtil.getJobs(token, page).then(
      jobs => {
      dispatch(receiveJobs(jobs));
      dispatch(ErrorsAction.clearErrors());
    },
      error => dispatch(ErrorsAction.receiveErrors(error.responseJSON))
    )
  );
};

export const receiveJobs = (jobs) => {
  return ({
    type: RECEIVE_JOBS,
    jobs
  });
};
