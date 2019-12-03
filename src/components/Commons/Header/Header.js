import React, { Component } from 'react';
import PageHeader from 'emerald-ui/lib/PageHeader';
import logo from '../assets/images/logo_utb.png';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super()
    this.state = {
      activeKey: 1
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage(selectedKey) {
    this.setState({
      activeKey: selectedKey
    })
  }

  render() {
    return (
      <PageHeader className="principal-header" >
        <div className="Logo col-lg-2">
          <img src={logo} alt="logo" />
        </div>
        <div className=" title col-lg-4 ">
          <h1>Learning Analitycs en SAVIO</h1>
        </div>
      </PageHeader>
    );
  }
}

export default Header;
