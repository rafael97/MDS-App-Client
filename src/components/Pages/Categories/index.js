
import React, { Component, Fragment } from 'react';
import request from '../../../utils/requets';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Grid from 'react-bootstrap/lib/Grid'
import CategoryTable from './CategoryTable'
import Chart from './Chars'
import CourseTable from '../../Commons/CourseTable'
import './css/Categories.css'
import { Spinner, Button } from 'emerald-ui';
require('dotenv').config();

const { URL_API = ' http://localhost:3050/' } = process.env

class Categories extends Component {
    constructor(props) {
        super()

        this.state = {
            categories: [],
            categoriesFilter: [],
            loadingResources: true,

            //Courses details
            coursesFilter: [],
            courses: [],

            //Navegation
            category_id: 0,
            parent_category_id: undefined
        }


        this.handlerFilterCategories = this.handlerFilterCategories.bind(this);
        this.handlerFilterCourses = this.handlerFilterCourses.bind(this)
        this.handlerUpdateCategoryByChild = this.handlerUpdateCategoryByChild.bind(this)
        this.UpdateComponent = this.UpdateComponent.bind(this)

    }

    async componentDidMount() {
        console.log('process', process.env);

        await this.UpdateComponent()
    }

    async UpdateComponent() {
        if (this.state.category_id !== 0) {
            const response = await request.get(`${URL_API}category/${this.state.category_id}`)
            const categories = response.data.categories ? response.data.categories : []
            const courses = response.data.courses ? response.data.courses : []
            const parent = response.data.parent !== undefined ? response.data.parent : undefined
            this.setState({
                categories: categories,
                categoriesFilter: categories,
                loadingResources: false,
                courses: courses,
                coursesFilter: courses,
                previous_category_id: parent
            })

        } else {
            const response = await request.get(`${URL_API}category/${this.state.category_id}/childs`)
            const parent = response.data.parent ? response.data.parent : undefined
            this.setState({
                categories: response.data,
                categoriesFilter: response.data,
                loadingResources: false,
                courses: response.data.courses !== undefined ? response.data.courses : [],
                coursesFilter: response.data.courses !== undefined ? response.data.courses : [],
                previous_category_id: parent
            })
        }
    }

    handlerFilterCategories(event) {
        this.setState({
            categoriesFilter: this.state.categories.filter(category => category.name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    handlerFilterCourses(event) {
        this.setState({
            coursesFilter: this.state.courses.filter(course => course.name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    handlerUpdateCategoryByChild(category_id) {
        this.setState({
            previous_category_id: this.state.category_id,
            category_id,
            loadingResources: true
        }, () => { this.UpdateComponent() })
    }

    render() {
        return (
            <Grid className="category-view">
                {
                    (() => {
                        if (this.state.loadingResources === true) {
                            return <Fragment>
                                <div>
                                    <Spinner size="lg" color="success" className="Loading" />
                                </div>
                            </Fragment>
                        }
                    })()
                }
                {
                    (() => {
                        if (this.state.previous_category_id !== undefined && this.state.loadingResources === false) {
                            return <Fragment>
                                <div className="button-back">
                                    <Button color="info" onClick={() => { this.handlerUpdateCategoryByChild(this.state.previous_category_id) }}>Back</Button>
                                </div>

                            </Fragment>
                        }
                    })()
                }
                {

                    (() => {
                        if (this.state.categoriesFilter.length > 0 && this.state.loadingResources === false) {

                            return <Fragment>
                                <h2>SubCategories</h2>
                                <SearchForm className="category-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerFilterCategories} />
                                <CategoryTable categories={this.state.categoriesFilter} updateHandler={this.handlerUpdateCategoryByChild} />
                            </Fragment>
                        }
                    })()
                }
                {
                    (() => {

                        if (this.state.coursesFilter.length > 0 && this.state.loadingResources === false) {
                            console.log('Courses', this.state.coursesFilter);
                            return <Fragment>
                                <h2>Courses</h2>
                                <SearchForm className="course-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerFilterCourses} />
                                <CourseTable courses={this.state.coursesFilter} />
                                <Chart courses={this.state.coursesFilter} />
                            </Fragment>
                        }
                    })()
                }
            </Grid>
        );
    }
}

export default Categories;
