import React, { Component } from 'react';
import {
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import NavbarBrand from 'containers/layouts/navs/NavbarBrand'

class SideNavBar extends Component {
  render() {
    return (
      
        <div className="sidebar">
          <div className="brand-logo text-white">
            <NavbarBrand />
          </div>
          
          <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/dashboard">
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
                            <NavLink href="/">
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
                            <NavLink href="/">
                              Performance
                            </NavLink>
                          </NavItem>
                      </DropdownItem>
                    </DropdownMenu>
              </UncontrolledDropdown>
          </Nav>
        </div>
    )
  }
}


export default SideNavBar;