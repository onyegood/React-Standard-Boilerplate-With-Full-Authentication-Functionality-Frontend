import React, { Component } from 'react'
import {Card, Row, Label, Form, Button, Col} from 'reactstrap';
import AuthLinks from 'containers/layouts/navs/authLinks';
import {reduxForm, Field} from 'redux-form';
import * as actions from 'config/actions';
import {compose} from 'redux';
import { connect } from 'react-redux';
import {toast} from 'react-toastify';
import guestPage from '../../../hoc/guestPage';
class SignupPage extends Component {

    state = {
      isProcessing: false
    }
    onSubmit = (formProps) => {
        this.setState({ isProcessing: true });
        const data = {
          firstName: formProps.firstName,
          middleName: formProps.middleName,
          lastName: formProps.lastName,
          gender: formProps.gender,
          phone: formProps.phone,
          email: formProps.email,
          password: formProps.password,
          role: '5c70324dfce1a922bef32474'
        }
        
        this.props.signup(data);
            setTimeout(() => {
              const { message } = this.props;
              if (message.success) {
                toast(message.message, { type: toast.TYPE.SUCCESS });
                this.setState({ isProcessing: false });
                this.props.history.push('/signin');
                // window.location = "/signin";
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
    const {isProcessing} = this.state;

    return (
      <Row>
        <div className="col-md-4 mx-auto mt-4 p-4">
            <Card className="p-4">
                <h3 className="text-center m-4">Sign up</h3>
                <Form onSubmit={handleSubmit(this.onSubmit)}>


                <Row>
                  <Col md={6}>
                   <Label>First Name</Label>
                    <Field 
                        name="firstName"
                        type="text"
                        component={renderField}
                        autoComplete="none"
                    />
                  </Col>

                  <Col md={6}>
                    <Label>Middle Name</Label>
                    <Field 
                        name="middleName"
                        type="text"
                        component={renderField}
                        autoComplete="none"
                    />
                  </Col>


                  </Row>
                    <br/>
                    <Label>Last Name</Label>
                    <Field 
                        name="lastName"
                        type="text"
                        component={renderField}
                        autoComplete="none"
                    />
                    <br/>
                    <Label>Gender</Label>
                    <Field 
                        name="gender" 
                        component={'select'}
                        className="form-control">
                      <option />
                      <option value="ff0000">Male</option>
                      <option value="00ff00">Female</option>
                    </Field>
                    <br/>
                    <Label>Phone</Label>
                    <Field 
                        name="phone"
                        type="text"
                        component={renderField}
                        autoComplete="none"
                    />
                    <br/>
                    <Label>Email</Label>
                    <Field 
                        name="email"
                        type="text"
                        component={renderField}
                        autoComplete="none"
                    />
                    <br/>
                    <Label>Password</Label>
                    <Field 
                        name="password"
                        type="password"
                        component={renderField}
                        autoComplete="none"
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
                        <i className="fa fa-user" /> Signup
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
    if (!values.firstName) {
      errors.firstName = 'First Name is required'
    }else if (!values.middleName) {
      errors.middleName = 'Middle Name is required'
    }else if (!values.lastName) {
      errors.lastName = 'Last Name is required'
    }else if (!values.gender) {
      errors.gender = 'Gender is required'
    }else if (!values.phone) {
      errors.phone = 'Phone is required'
    }
    // else if (!values.phone.length <= 10) {
    //   errors.phone = 'Must be less than 11 digits'
    // }else if (!values.phone.length >= 13) {
    //   errors.phone = 'Must be more than 13 digits'
    // }else if (!values.password) {
    //   errors.password = 'Password is required'
    // } else if (values.password.length <= 5) {
    //   errors.password = 'Must be 5 characters or more'
    // }
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
        form: 'signup',
        validate: validate
    })
)(guestPage(SignupPage))