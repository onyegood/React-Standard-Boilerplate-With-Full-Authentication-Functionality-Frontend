import React from 'react'
import {Route, Switch} from 'react-router-dom';
import HomePage from 'containers/layouts/HomePage';
import SigninPage from 'containers/pages/auth/SigninPage';
import SignupPage from 'containers/pages/auth/SignupPage';
import DashboardPage from 'containers/pages/user/DashboardPage';
import SignoutPage from 'containers/pages/auth/SignoutPage';
import ForgotPasswordPage from 'containers/pages/auth/ForgotPasswordPage';
import ResetPasswordPage from 'containers/pages/auth/ResetPasswordPage';
import PageNotFound from 'containers/pages/404/PageNotFound';
import NetworkDictator from '../hoc/networkDictator'
const index =()=>{
  return (
        <Switch>
            <Route exact path="/" component={DashboardPage} />
            <Route exact path="/dashboard" component={DashboardPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/signin" component={SigninPage} />
            <Route exact path="/signout" component={SignoutPage} />
            <Route exact path="/forgotpass" component={ForgotPasswordPage} />
            <Route exact path="/reset-password/:id/:token" component={ResetPasswordPage} />
            <Route component={PageNotFound} />
        </Switch>
  )
}
export default NetworkDictator(index);