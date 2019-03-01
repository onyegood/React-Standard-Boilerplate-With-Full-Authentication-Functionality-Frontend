import React, { Component } from 'react'
import {Card, Row, Label, Form, Button} from 'reactstrap';
import AuthLinks from 'containers/layouts/navs/authLinks';
import {reduxForm, Field} from 'redux-form';
import * as actions from 'config/actions';
import {compose} from 'redux';
import { connect } from 'react-redux';
import {toast} from 'react-toastify';
import guestPage from '../../../hoc/guestPage';
class SigninPage extends Component {

  state = {
    isProcessing: false
  }
  onSubmit = (formProps) => {

    this.setState({ isProcessing: true });
    this.props.signin(formProps);
     setTimeout(() => {
          const { message } = this.props;
          if (message.success) {
            this.setState({ isProcessing: false });
            window.location = "/signin";
            // window.location.reload();
          }else{
            toast(message.message, { type: toast.TYPE.ERROR });
            this.setState({ isProcessing: false });
          }
      }, 2000);

      console.log('Message', this.message)

      // setTimeout(() => {
      //   this.props.clearMessage();
      // }, 4000);

  }

  render() {
    
    const {handleSubmit} = this.props;
    const {url} = this.props.match;
    const {isProcessing} = this.state;

    return (
      <Row>
        <div className="col-md-4 mx-auto mt-4 p-4">
            <Card className="p-4">
                <h3 className="text-center m-4">Sign in</h3>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Label>Email</Label>
                    <Field 
                        name="email"
                        type="text"
                        component={renderField}
                        autoComplete="none"
                        className="form-control"
                    />
                    <br/>
                    <Label>Password</Label>
                    <Field 
                        name="password"
                        type="password"
                        component={renderField}
                        autoComplete="none"
                        className="form-control"
                    />

                    <br/>
                    {
                      isProcessing ?
                        <span
                          className="btn btn-success btn-block">
                          <i className="fa fa-spinner fa-spin" /> processing...
                      </span>
                    :
                    <Button
                        className="btn btn-success btn-block">
                        Signin
                    </Button>
                    }
                </Form>
                <hr/>
                <AuthLinks 
                  userauth={url === '/signin' ? 'signup': 'signin'}
                  forgotpass='Forgot Password'
                />
            </Card>
        </div>
      </Row>
    )
  }
}

const mapStateToProps = state => {
    return {
      message: state.message
    }
}
const validate = (values) => {
    const errors = {}
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length <= 5) {
      errors.password = 'Must be 5 characters or more'
    }
    if (!values.email) {
      errors.email = 'Email is required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address'
    }
    return errors
    
  }


const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      {/*<Label>{label}</Label>*/}
      <div>
        <input {...input} placeholder={label} type={type} className="form-control" />
        {touched &&
          ((error && <span className="text-danger">{error}</span>) ||
            (warning && <span className="text-worning">{warning}</span>))}
      </div>
    </div>
  )

export default compose(
    connect(mapStateToProps, actions),
    reduxForm({
        form: 'signin',
        validate: validate
})
)(guestPage(SigninPage))