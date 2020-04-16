import React from 'react'
import * as bs from 'react-bootstrap'
import Logo from './Media/logo.png';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import AppContext from './context'

function Headcontainer(props) {
  const context = React.useContext(AppContext)

   return (
      <bs.Navbar bg="light" expand="lg" >
        <Link to='/'>
              <bs.Navbar.Brand>
                <img alt="Logo" style={{height: 40}} src={Logo}></img> 
              </bs.Navbar.Brand>
            </Link>
        <bs.Navbar.Toggle aria-controls="basic-navbar-nav" />
        <bs.Navbar.Collapse id="basic-navbar-nav">
          <bs.Nav className="mr-auto" >
            <Link to='/home' className='nav-link'  onClick = {evt => {
          context.campaigns = context.cams
          }}>Home</Link>
          </bs.Nav>
        </bs.Navbar.Collapse>
      </bs.Navbar>
   )
}

export default Headcontainer;