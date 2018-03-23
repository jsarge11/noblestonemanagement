import React from 'react'
import logo from '../images/logo.png'
import '../App.css'

function Header(props) {
  return (
  <div className="App-header">
    <img src={logo} className="header-logo" alt="logo" />
    <div className="menu">
      <ul>Why Noble</ul>
      <ul>Contact</ul>
      <ul>Location</ul>
    </div>
  </div>
  );

}

export default Header
