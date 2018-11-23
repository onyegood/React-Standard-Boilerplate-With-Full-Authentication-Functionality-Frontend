import React from 'react'
import {NavLink} from 'reactstrap';
const authLinks = (props) => {

  return (
    <div className="auth-links">
        <ul>
            <li>
                <NavLink href={`/${props.userauth}`}>{props.userauth}</NavLink>
            </li>
            <li>
                <NavLink href="/forgotpass">{props.forgotpass}</NavLink>
            </li>
        </ul>
    </div>
  )
}

export default authLinks
