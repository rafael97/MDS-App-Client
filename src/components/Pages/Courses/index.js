import React, { Component } from 'react';
import request from '../../../utils/requets';
import Grid from 'react-bootstrap/lib/Grid'
import Header from './Header'

import './css/Courses.css'


class Courses extends Component {
    constructor(props){
        super()

        this.state = { 
            categoryDetail:[],
            loadingResources: true
        }

        
    }
    
    async componentDidMount() {
        let CategoryId = 0
        let coursesResponse = []
        if (this.props.location.state) {
            CategoryId = this.props.location.state.CategoryId;
        }
        const response = await request.get(`http://192.207.60.187:8000/v1/category/${CategoryId}?SetCourses=true`)
           
    if (!Array.isArray(response.data)) {
        coursesResponse = response.data.courses;
    }
       
        this.setState({ courses: coursesResponse, coursesFilter: coursesResponse ,categoryDetail : response.data, loadingResources:false})
    }



    render() {
        return (
            <Grid >
                <Header course ={this.state.categoryDetail} />
                               
            </Grid>
        );
    }
}

export default Courses;
