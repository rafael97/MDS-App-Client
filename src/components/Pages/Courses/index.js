import React, { Component } from 'react';
import request from '../../../utils/requets';
import  SearchForm  from 'emerald-ui/lib/SearchForm';
import Grid from 'react-bootstrap/lib/Grid'
import CourseTable from './CourseTable'
import './css/Courses.css'


class Courses extends Component {
    constructor(props){
        super()

        this.state = { 
            courses: [],
            coursesFilter: [],
            loadingResources: true
        }

        
        this.handlerFilterCourses = this.handlerFilterCourses.bind(this);
    }
    
    async componentDidMount() {
        const {CategoryId} = this.props.location.state
        console.log('CategoryId',CategoryId);
        const response = await request.get(`http://ec2-54-88-64-36.compute-1.amazonaws.com:3000/v1/category/${CategoryId}/childs`)
        this.setState({ courses: response.data, coursesFilter: response.data , loadingResources:false})
    }

    handlerFilterCourses(event){
        this.setState({
            coursesFilter: this.state.courses.filter(course => course.name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    render() {
        return (
            <Grid >
                <SearchForm className="course-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerFilterCourses}/>
                <CourseTable course ={this.state.coursesFilter} />
            </Grid>
        );
    }
}

export default Courses;
