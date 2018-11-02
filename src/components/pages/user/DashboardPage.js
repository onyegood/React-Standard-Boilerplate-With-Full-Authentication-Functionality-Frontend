import React, { Component } from 'react'
import Header from 'components/layouts/Header';
import requireAuth from 'hoc/requireAuth';

class DashboardPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <p className="text-center p-4 m-4">Welcome to user dashboard</p>
      </div>
    )
  }
}



export default requireAuth(DashboardPage)
