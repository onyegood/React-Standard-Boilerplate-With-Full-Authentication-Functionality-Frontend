import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import {
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
class SideNavLink extends Component {
  render() {
    return (
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
    </Nav>
    )
  }
}

export default SideNavLink;