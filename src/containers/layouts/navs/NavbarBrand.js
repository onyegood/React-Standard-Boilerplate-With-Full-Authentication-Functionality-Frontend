import React from 'react'
import {
    NavbarBrand
  } from 'reactstrap';
  
export default () => {
  return (
    <NavbarBrand href="/dashboard">
      <img 
        className=""
        height="50"
        src="assets/img/logo.png" 
        alt="Logo" />
    </NavbarBrand>
  )
}
