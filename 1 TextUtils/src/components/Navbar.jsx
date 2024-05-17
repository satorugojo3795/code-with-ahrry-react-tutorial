import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
const Navbar = (props) => {
  return (
    <React.Fragment>
      
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/about'>About</Link>
              </li>
            </ul>
            <div className="form-check form-switch text" style={props.myStyle} >
              <input className="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault"onClick={props.toggleMode}/>
              <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" >{props.switchText}</label>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
      
  )
}
Navbar.propTypes = {title:PropTypes.string,
  mode:PropTypes.string,
  myStyle: PropTypes.object,
  toggleMode: PropTypes.func,
  switchText: PropTypes.string 
}

export default Navbar;
