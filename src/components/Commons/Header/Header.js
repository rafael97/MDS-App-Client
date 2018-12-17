import React, { Component } from 'react';
import PageHeader from 'emerald-ui/lib/PageHeader';
import NavItem from 'react-bootstrap/lib/NavItem';
import { IndexLinkContainer } from 'react-router-bootstrap'


import './Header.css';

class Header extends Component {
  constructor(props){
    super()
    this.state = {
      activeKey: 1
    }
    this.handleChangePage = this.handleChangePage.bind(this)
  }

  handleChangePage(selectedKey){
    this.setState({
      activeKey: selectedKey
    })
  }

  render() {
    return (
      <PageHeader>
        <h1>MDS App</h1>
        <PageHeader.Nav activeKey={this.state.activeKey} onSelect={this.handleChangePage}>
        <IndexLinkContainer to='/'>
            <NavItem eventKey={1} >CATEGORIES</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to='/course'>
            <NavItem eventKey={2} >COURSE</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to='/stats'>
            <NavItem eventKey={3} >STATS</NavItem>
          </IndexLinkContainer>
          <IndexLinkContainer to='/about'>
            <NavItem eventKey={4} >ABOUT</NavItem>
          </IndexLinkContainer>
        </PageHeader.Nav>
      </PageHeader>
    );
  }
}

export default Header;
