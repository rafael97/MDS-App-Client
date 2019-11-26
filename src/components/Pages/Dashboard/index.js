import React, { Component, Fragment } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Dashboard from './Dashboard'
import Button from 'emerald-ui/lib/Button';

class Body extends Component {
  constructor(props) {
    super()
    this.state = {
      activeKey: 1,
      studentCode: "",
      studentData: {}

    }
    this.updateStudentCode = this.updateStudentCode.bind(this)
    this.handlerSearchStudents = this.handlerSearchStudents.bind(this);
  }

  async handlerSearchStudents() {
    console.log(this.state.studentCode.toLowerCase());
    console.log(this.state.studentData);
    await this.setState({
      studentData: {
        "nombre": "Rafael",
        code: this.state.studentCode
      }
    })
    console.log(this.state.studentData);
  }

  async updateStudentCode(event) {
    console.log(this.state.studentCode);
    await this.setState({ studentCode: event.target.value })
    console.log(this.state.studentCode);
  }

  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <Fragment>
            <div className="col-lg-8 ">
              <SearchForm className="Student-search" inputId="query" value={this.state.studentCode} clearable onChange={(event) => this.updateStudentCode(event)} />
            </div>
            <div className="col-lg-2 ">
              <Button color="info" className="submmit-search" onClick={this.handlerSearchStudents} >Buscar</Button>
            </div>
          </Fragment>

        </div>
        < Dashboard Student={this.state.studentData} />
      </div>
    )

  }
}

export default Body;
