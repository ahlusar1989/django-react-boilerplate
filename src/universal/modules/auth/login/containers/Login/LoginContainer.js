import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { formValueSelector } from 'redux-form'
import { bindActionCreators } from 'redux';

import Login from '../../components/Login/Login';
import * as actionCreators from '../../../ducks/auth';

@connect(mapStateToProps, mapDispatchToProps)
class LoginContainer extends Component {
  static PropTypes = {
    handleSubmit: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    statusText: PropTypes.string
  };

  static defaultProps = {
    statusText: '',
  };

  handleSubmit(e, username, password) {
    e.preventDefault();
    e.stopPropagation();
    this.props.actions.login(username, password);
  }

  render() {
    return (<Login {...this.props} handleSubmit={this.handleSubmit.bind(this)}/>);
  }
}

function mapStateToProps(state, props) {
  const selector = formValueSelector('login');
  return {
    username: selector(state, 'username'),
    password: selector(state, 'password'),
    statusText: state.auth.statusText
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    dispatch,
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default LoginContainer;
