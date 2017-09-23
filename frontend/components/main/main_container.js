import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import {clearErrors} from '../../actions/errors_actions';
import MainPage from './main';

const mapStatetoProps = (state) => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchtoProps = (dispatch) => {
  return {
    clearErrors: () => dispatch(clearErrors())
  };
};

export default withRouter(connect(
  mapStatetoProps,
  mapDispatchtoProps
)(MainPage));
