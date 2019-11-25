import React, { Component, Fragment } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Dashboard from './Dashboard'

class Body extends Component {
  constructor(props) {
    super()
    this.state = {
      activeKey: 1,
      studentCode: "",
      studentData: {}

    }
    this.handleChangePage = this.handleChangePage.bind(this)
    this.handlerSearchStudents = this.handlerSearchStudents.bind(this);
  }

  handlerSearchStudents(event) {
    this.setState({
      studentCode: event.target.value,
      studentData: { "nombre": "Rafael" }
    })
    console.log(event.target.value.toLowerCase());

  }

  handleChangePage(selectedKey) {
    this.setState({
      activeKey: selectedKey
    })
  }

  render() {
    return (
      <div className="dashboard">
        <Fragment>
          <SearchForm className="Student-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerSearchStudents} />
        </Fragment>
        < Dashboard Student={this.state.studentData} />
      </div>
    )

  }
}

export default Body;
