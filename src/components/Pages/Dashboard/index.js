import React, { Component, Fragment } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Dashboard from './Dashboard'
import Button from 'emerald-ui/lib/Button';
import Toolbar from 'emerald-ui/lib/Toolbar';
import request from '../../../utils/requets';
const { URL_API = ' http://localhost:3050/' } = process.env


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
    // const response = await request.get(`${URL_API}course/${CourseId}`)
    await this.setState({
      studentData: {
        "nombre": "Rafael",
        code: this.state.studentCode,
        login_number: 5,
        graphs: {
          am_attendees_courses: {
            title: "Visitas por curso",
            yAxis: [30, 40, 45, 50, 49, 60, 70, 91],
            xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          am_resources_courses: {
            title: "Recursos por curso",
            yAxis: [30, 40, 45, 50, 49, 60, 70, 91],
            xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          am_interaction_resources_courses: {
            title: "Interacción de recurso por cursos",
            yAxis: [30, 40, 45, 50, 49, 60, 70, 91],
            xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        }
      }
    })
  }

  async updateStudentCode(event) {
    await this.setState({ studentCode: event.target.value })
  }

  render() {
    return (
      <div className="dashboard">
        <div className="row">
          <div className="col-lg-4 ">
            <Toolbar>
              <SearchForm className="Student-search" inputId="query" value={this.state.studentCode} clearable onChange={(event) => this.updateStudentCode(event)} />
              <Button color="info" className="submmit-search" onClick={this.handlerSearchStudents} >Buscar</Button>
            </Toolbar>
          </div>
        </div>
        < Dashboard Student={this.state.studentData} />
      </div>
    )

  }
}

export default Body;
