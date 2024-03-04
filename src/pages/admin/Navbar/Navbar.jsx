import React from 'react'
import './Navbar.css'
import message from '../images/messageLogo.svg'
import bell from '../images/bellLogo.svg'




const Navbar = () => {
  return (
   <>
   <div className="navbar">
    <div className="navbar-info">
      <h1>Overview</h1>
    </div>
    <div className="nav-logo">
  <img src={message} alt="" />
   <img src={bell} alt="" />
    </div>
   </div>
   </>
  )
}

export default Navbar