import React from 'react'
import {Route} from 'react-router-dom';
import HomePage from 'components/layouts/HomePage';
import SigninPage from 'components/pages/auth/SigninPage';
import SignupPage from 'components/pages/auth/SignupPage';
import DashboardPage from 'components/pages/user/DashboardPage';
import SignoutPage from 'components/pages/auth/SignoutPage';

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