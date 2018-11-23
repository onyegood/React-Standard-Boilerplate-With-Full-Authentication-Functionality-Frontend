import React, {Component} from 'react'
import SideNavLink from './SideNavLinks';

 class MobileNav extends Component {
     state ={
        isMobileNav: false
     }

     render() {
        const {isMobileNav} = this.state;
            return (
                <div className="d-block d-sm-block d-md-none">
                    <div className='nav-switch'>
                        <i 
                            className="ion-ios-contact pull-left" 
                            style={{fontSize: '30px'}}/>

                        <i className={isMobileNav === false ? 'ion-ios-keypad' : 'ion-ios-close-circle'} 
                            style={{fontSize: '30px', float: 'right'}} 
                            onClick={() => this.setState({isMobileNav: !isMobileNav})}
                        />
                    </div>
                    <div 
                        className="mobile-nav" 
                        style={{display: `${isMobileNav ? '' : 'none'}`}}>
                        <div className="user-avatar">
                        </div>

                        <div className="mobile-nav-link">
                            <SideNavLink />
                        </div>
                    </div>
                </div>
            )
     }
}

export default MobileNav;