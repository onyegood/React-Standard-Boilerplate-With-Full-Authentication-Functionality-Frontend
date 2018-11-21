import React from 'react'
import {Route} from 'react-router-dom';
import HomePage from 'containers/layouts/HomePage';
import SigninPage from 'containers/pages/auth/SigninPage';
import SignupPage from 'containers/pages/auth/SignupPage';
import DashboardPage from 'containers/pages/user/DashboardPage';
import SignoutPage from 'containers/pages/auth/SignoutPage';

const index =()=>{
  return (
    <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard" component={DashboardPage} />
        <Route exct path="/signup" component={SignupPage} />
        <Route exct path="/signin" component={SigninPage} />
        <Route exct path="/signout" component={SignoutPage} />
    </div>
  )
}
export default index;