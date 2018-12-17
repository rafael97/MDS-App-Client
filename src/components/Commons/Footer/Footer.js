import React, { Component } from 'react';
import { Row, Grid } from 'react-bootstrap'
import './Footer.css';


class Footer extends Component {
  render() {
    return (
      <Grid fluid className="Footer" >
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
