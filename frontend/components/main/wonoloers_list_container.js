import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {fetchUsers} from '../../actions/users_actions';
import {clearErrors} from '../../actions/errors_actions';
import WonoloersList from './wonoloers_list';

const mapStatetoProps = (state) => {
  return {
    currentUser: state.currentUser,
    badges: state.badges,
    users: state.users
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    fetchUsers: (token, page) => dispatch(fetchUsers(token, page)),
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(WonoloersList));
