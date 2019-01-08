import React, { Component } from 'react';
import request from '../../../utils/requets';
import Grid from 'react-bootstrap/lib/Grid'
import Header from './Header'

import './css/Courses.css'


class Courses extends Component {
    constructor(props){
        super()

        this.state = { 
            courses: [],
            coursesFilter: [],
            categoryDetail: [],
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
        console.log('CourseId',CourseId);
        const response = await request.get(`http://ec2-54-88-64-36.compute-1.amazonaws.com:3000/v1/course/${CourseId}`)
           console.log('response.data',response.data);
           
    if (!Array.isArray(response.data)) {
        coursesResponse = response.data.courses;
    }
       
        this.setState({ courses: coursesResponse, coursesFilter: coursesResponse ,categoryDetail : response.data, loadingResources:false})
    }

    handlerFilterCourses(event){
    
        this.setState({
            coursesFilter: this.state.courses.filter(course => course.shortname.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    render() {
        return (
            <Grid >
                <Header course ={this.state.categoryDetail} />
                {/* <CourseTable course ={this.state.coursesFilter} /> */}
            </Grid>
        );
    }
}

export default Courses;
