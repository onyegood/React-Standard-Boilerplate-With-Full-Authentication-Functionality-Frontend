import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem 
} from 'reactstrap';

class NavLinks extends Component {

  state = {
    isOpen: false
   }

   toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  renderLink = () => {

    if (this.props.isAuthenticated) {
      return(
        <Nav className="ml-auto" navbar>
              
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <i className="ion-ios-notifications-outline icon-small" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <NavItem>
                        <NavLink href="/">I love you dear!</NavLink>
                      </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <i className="ion-ios-mail-unread icon-small" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <NavItem>
                        <NavLink href="/">I love you dear!</NavLink>
                      </NavItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
    
              <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav>
                  Onyekachi <i className="ion-ios-contact icon-small" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                      <NavItem>
                        <NavLink href="/">My Account</NavLink>
                      </NavItem>
                  </DropdownItem>
                  <DropdownItem>
                      <NavItem>
                        <NavLink href="/">Settings</NavLink>
                      </NavItem>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <NavLink href="/signout">
                      Logout
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            
              </Nav>
              
          
      )
    }else{
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/signup">Signup</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/signin">Signin</NavLink>
          </NavItem>
        </Nav>
      )
    }
  }

  render() {

    return (
       <div>
        <Navbar color="transparent" light expand="md" className="bg-light-plus">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {this.renderLink()}
            </Collapse>
        </Navbar>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}
export default connect(mapStateToProps)(NavLinks)

