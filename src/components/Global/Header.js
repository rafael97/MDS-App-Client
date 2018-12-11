import React, { Component } from 'react';
import logo from './images/logo_utb.png';
import './css/Header.css';
import {Row,Col, Grid}from 'react-bootstrap'
class Header extends Component {
  render() {
    return (

      <Grid className="Header" >
        <Row>
          <Col xs={5} md={5} >
            <div className="Logo">
              <img src={logo} alt="logo" />
            </div>
          </Col>
          <Col xs={7} md={7} >
            <div className="Header-title">
              <h1>MDS App</h1>
            </div>
          </Col>
        </Row>
      </Grid>

    );
  }
}

export default Header;
