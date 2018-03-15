import React, { Component } from 'react'
import logo from '../images/logo.png'
import '../App.css'

class Header extends Component {
    
    render() {
        return (
        <div className="App-header">
          <img src={logo} className="header-logo" alt="logo" />
          <div className="menu">
            <ul>Why Noble</ul>
            <ul>Contact</ul>
            <ul>Sealer</ul>
          </div>
        </div>
        );
    }

}

export default Header
