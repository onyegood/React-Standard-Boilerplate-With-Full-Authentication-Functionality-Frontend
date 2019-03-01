import React, { Component } from 'react'
import {Card, Row, Label, Form, Button} from 'reactstrap';
import AuthLinks from 'containers/layouts/navs/authLinks';
import {reduxForm, Field} from 'redux-form';
import * as actions from 'config/actions';
import {compose} from 'redux';
import { connect } from 'react-redux';
import {toast} from 'react-toastify';
import guestPage from '../../../hoc/guestPage';
class ResetPasswordPage extends Component {

  state = {
    isProcessing: false
  }
  onSubmit = (formProps) => {
    const {id, token} = this.props.match.params;
    const params = {
      userId: id,
      passwordToken: token,
      password: formProps.password
    }
  
    this.setState({ isProcessing: true });
    this.props.resetPassword(params);
     setTimeout(() => {
      const { message } = this.props;
      if (message.success) {
        toast(message.message, { type: toast.TYPE.SUCCESS });
        this.setState({ isProcessing: false });
        this.props.history.push('/signin');
          }else{
            toast(message.message.message, { type: toast.TYPE.ERROR });
            this.setState({ isProcessing: false });
          }
      }, 2000);

      setTimeout(() => {
          this.props.clearMessage();
      }, 3000);  
     
  }

  render() {
    
    const {handleSubmit} = this.props;
    const {url} = this.props.match;
    const {isProcessing} = this.props;

    return (
      <Row>
        <div className="col-md-4 mx-auto mt-4 p-4">
            <Card className="p-4">
                <h3 className="text-center m-4">Reset Password</h3>
                <Form onSubmit={handleSubmit(this.onSubmit)}>
                    <Label>Password</Label>
                    <Field 
                        name="password"
                        type="password"
                        component={renderField}
                        autoComplete="none"
                        className="form-control"
                    />
                    <br/>
                    <Label>Confirm Password</Label>
                    <Field 
                        name="confirmPassword"
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
      message: state.message.message
    }
}
const validate = (values) => {
    const errors = {}
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length <= 5) {
      errors.password = 'Must be 5 characters or more'
    }
    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.confirmPassword !== values.password) {
      errors.confirmPassword = "Password didn't match"
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
)(guestPage(ResetPasswordPage))