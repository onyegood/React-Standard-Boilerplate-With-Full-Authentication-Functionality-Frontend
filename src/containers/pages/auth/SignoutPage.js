import React, { Component } from 'react'
import {connect} from 'react-redux';

import * as actions from 'config/actions';
class SignoutPage extends Component {
  componentWillMount = ()=> {
    this.props.signout();
    this.props.clearMessage();
    this.props.history.push('/signin')
  }
  render() {
    return (
      <div>
      </div>
    )
  }
}
export default connect(null, actions)(SignoutPage)