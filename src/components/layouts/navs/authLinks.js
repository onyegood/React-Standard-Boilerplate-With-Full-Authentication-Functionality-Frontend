import React from 'react'
import {NavLink} from 'reactstrap';
const authLinks = ({props}) => {

  return (
    <ul className="list-group">
        <li>
            <NavLink href="/signup">Sign Up</NavLink>
        </li>
        <li>
            <NavLink href="/signin">Sign In</NavLink>
        </li>
        <li>
            <NavLink href="/">Forgot Password</NavLink>
        </li>
    </ul>
  )
}

export default authLinks
