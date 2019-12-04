import React, { Component, Fragment } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Dashboard from './Dashboard'
import Button from 'emerald-ui/lib/Button';
import Toolbar from 'emerald-ui/lib/Toolbar';
import request from '../../../utils/requets';

import './css/dashboard.css';
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
        "nombre": "Rafael Rocha Barrios",
        code: this.state.studentCode,
        login_number: 57,
        graphs: {
          am_attendees_courses: {
            seriesName: "Cursos-visitados",
            title: "Visitas por curso",
            yAxis: [30, 40, 45, 50, 49, 60, 70, 91],
            xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          am_resources_courses: {
            seriesName: "Recursos",
            title: "Recursos por curso",
            yAxis: [30, 40, 45, 50, 49, 60, 70, 91],
            xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          am_interaction_resources_courses: {
            seriesName: "Recursos revisados",
            title: "Interacción de recurso por cursos",
            yAxis: [30, 40, 45, 50, 49, 60, 70, 91],
            xAxis: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          },
          am_login_by_week: {
            seriesName: "Ingresos a savio",
            title: "Ingresos por semanas",
            yAxis: [2, 4, 10, 0, 7, 15, 1, 2, 3, 6, 7, 8, 9, 1, 4, 6],
            xAxis: ["Semana 1", "Semana 2", "Semana 3", "Semana 4", "Semana 5", "Semana 6",
              "Semana 7", "Semana 8", "Semana 9", "Semana 10", "Semana 11", "Semana 12", "Semana 13",
              "Semana 14", "Semana 15", "Semana 16"]
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
      <div className="body-dashboard">
        <div className="row">
          <div className="col-lg-12 student-search">
            <Toolbar>
              <SearchForm className="" inputId="query" value={this.state.studentCode} clearable onChange={(event) => this.updateStudentCode(event)} />
              <Button color="info" className="submmit-search" onClick={this.handlerSearchStudents} >Buscar</Button>
            </Toolbar>
          </div>
        </div>
        <div className="row">
          < Dashboard Student={this.state.studentData} />
        </div>
      </div>
    )

  }
}

export default Body;
