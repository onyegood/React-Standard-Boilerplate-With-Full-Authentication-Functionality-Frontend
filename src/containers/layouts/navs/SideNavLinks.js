import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from 'config/actions';
import {
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
class SideNavLink extends Component {

  renderLink = () => {
    const {user} = this.props;
    if (this.props.isAuthenticated) {
      return(
        <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink to="/dashboard">
            <i className="ion-ios-speedometer icon-small text-white" /> 
            &nbsp;&nbsp;Dashbard
          </NavLink>
        </NavItem>
        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <i className="ion-ios-people icon-small text-white" />
                &nbsp;&nbsp;User Manage
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavItem>
                      <NavLink to="/">
                        All Users
                      </NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
        </UncontrolledDropdown>

        <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                <i className="ion-ios-tv icon-small text-white" />
                &nbsp;&nbsp;System Manage
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                    <NavItem>
                      <NavLink to="/">
                        Performance
                      </NavLink>
                    </NavItem>
                </DropdownItem>
              </DropdownMenu>
        </UncontrolledDropdown>
        <div className="side-bar-logout">
          <NavItem>
              <NavLink to="/signout">
                <i className="icon-small text-white ion-ios-log-out" /> 
                &nbsp;&nbsp;
                Logout
            </NavLink>
          </NavItem>
        </div>
    </Nav>)
    }else{
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <i className="icon-small text-white ion-ios-home" />
            &nbsp;&nbsp;
            <NavLink to="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <i className="icon-small text-white ion-ios-log-out" />
            &nbsp;&nbsp;
            <NavLink to="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/signin">
            <i className="icon-small text-white ion-ios-log-in"/>
            &nbsp;&nbsp;
            Signin
            </NavLink>
          </NavItem>
        </Nav>
      )
    }
  }
  render() {
    return (
      <div>
        {this.renderLink()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    user: state.user.user
  }
}
export default connect(mapStateToProps, actions)(SideNavLink)