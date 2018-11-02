import React, { Component } from 'react'
import {connect} from 'react-redux';
import Header from 'components/layouts/Header';

import * as actions from 'config/actions';
class SignoutPage extends Component {
  componentWillMount = ()=> {
    this.props.signout();
    this.props.clearMessage();
  }
  render() {
    return (
      <div>
        <Header />
        <p>Sorry to see you go!</p>
      </div>
    )
  }
}
export default connect(null, actions)(SignoutPage)