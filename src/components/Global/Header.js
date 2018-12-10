import React, { Component } from 'react';
import logo from './images/logo.svg';
import './css/Header.css';
//import 'emerald-ui/lib/styles-ceb.css';
class Header extends Component {
  render() {
    return (
      <div className="Header">
        <div className="Logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-lg-8 ">
        <h1>MDS App</h1>
        </div>
      </div>
    );
  }
}

export default Header;
