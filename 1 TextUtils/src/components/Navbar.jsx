import React from 'react'
import PropTypes from 'prop-types';
import { useState } from 'react';
const Navbar = (props) => {
  const [switchText,setSwitchText] = useState("Enable Dark Mode");
  const [propsMode,setPropsMode] = useState(props.mode);
  const [myStyle,setStyle] = useState({
    color: 'black'
  })
  const toggleMode = () => {
    if(propsMode === "light"){
      console.log(propsMode)
      setStyle({
        color: 'white'
      })
      setSwitchText("Enable Light Mode");
      setPropsMode("dark");
      document.style.backgroundColor = 'black'
    }
    else{
      console.log(propsMode)
      setStyle({
        color: 'black'
      })
      setSwitchText("Enable Dark Mode");
      setPropsMode("light");
      // document.style.backgroundColor = 'white';
    }
    
  }
  return (
    <React.Fragment>
      
        <nav className={`navbar navbar-expand-lg bg-${propsMode} navbar-${propsMode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href='/'>{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href='/'>Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href='/'>About</a>
              </li>
            </ul>
            <div className="form-check form-switch text" style={myStyle} >
              <input className="form-check-input" type="checkbox" role="switch"  id="flexSwitchCheckDefault"onClick={toggleMode}/>
              <label className="form-check-label"  htmlFor="flexSwitchCheckDefault" >{switchText}</label>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
      
  )
}
Navbar.propTypes = {title:PropTypes.string,
  mode:PropTypes.string
}
export default Navbar;
