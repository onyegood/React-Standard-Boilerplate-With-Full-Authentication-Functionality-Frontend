import React from 'react'
// import {NavLink} from 'reactstrap';
import {Link} from 'react-router-dom';
const authLinks = (props) => {

  return (
    <div className="auth-links">
        <ul>
            <li>
                <Link to={`/${props.userauth}`}>{props.userauth}</Link>
            </li>
            <li>
                <Link to="/forgotpass">{props.forgotpass}</Link>
            </li>
        </ul>
    </div>
  )
}

export default authLinks
