import React, { Component } from 'react';
import request from '../../../utils/requets';
import Grid from 'react-bootstrap/lib/Grid'
import Header from './Header'
import Detail from './Detail'
import Charts from './Chars'
import './css/Courses.css'
const { URL_API = ' http://localhost:3050/' } = process.env

class Courses extends Component {
    constructor(props) {
        super()

        this.state = {
            courses: [],
            coursesFilter: [],
            CourseDetail: [],
            loadingResources: true
        }


        this.handlerFilterCourses = this.handlerFilterCourses.bind(this);
    }

    async componentDidMount() {
        let CourseId = 0
        let coursesResponse = []
        if (this.props.location.state) {
            CourseId = this.props.location.state.CourseId;
        }

        const response = await request.get(`${URL_API}course/${CourseId}`)


        if (!Array.isArray(response.data)) {
            coursesResponse = response.data.courses;
        }

        this.setState({ courses: coursesResponse, coursesFilter: coursesResponse, CourseDetail: response.data, loadingResources: false })
    }

    handlerFilterCourses(event) {

        this.setState({
            coursesFilter: this.state.courses.filter(course => course.shortname.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    render() {
        return (<Grid>
            <Header course={this.state.CourseDetail} />
            <Detail course={this.state.CourseDetail} />
            <Charts course={this.state.CourseDetail} />
        </Grid>
        );
    }
}

export default Courses;
