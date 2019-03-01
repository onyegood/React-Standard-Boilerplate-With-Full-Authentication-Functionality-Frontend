import React, { Component } from 'react';

import NavbarBrand from 'containers/layouts/navs/NavbarBrand'
import SideNavLink from './SideNavLinks';

class SideNavBar extends Component {
  render() {
    return (
      
        <div className="sidebar">
          <div className="brand-logo text-white">
            <NavbarBrand />
          </div>
            <SideNavLink />
        </div>
    )
  }
}


export default SideNavBar;