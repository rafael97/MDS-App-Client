import React, { Component } from 'react';
import request from '../../../utils/requets';
import  SearchForm  from 'emerald-ui/lib/SearchForm';
import Grid from 'react-bootstrap/lib/Grid'
import CourseTable from './CourseTable'
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
        let CategoryId = 0
        let coursesResponse = []
        if (this.props.location.state) {
            CategoryId = this.props.location.state.CategoryId;
        }
        console.log('CategoryId',CategoryId);
        const response = await request.get(`http://192.207.60.187:8000/v1/category/${CategoryId}?SetCourses=true`)
           
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
                <SearchForm className="course-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerFilterCourses}/>
                <CourseTable course ={this.state.coursesFilter} />
            </Grid>
        );
    }
}

export default Courses;
