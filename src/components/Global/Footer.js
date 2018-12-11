import React, { Component } from 'react';
import './css/Footer.css';
import {Row, Grid}from 'react-bootstrap'


class Footer extends Component {
  render() {
    return (
     
      <Grid className="Footer" >
      <Row>
     <div >
        <p> footer </p>
      </div>
      </Row>
      </Grid>
    );
  }
}

export default Footer;
