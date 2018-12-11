import React, { Component } from 'react';
import request from '../../utils/requets';

import 'emerald-ui/lib/styles-ceb.css'
import { SearchForm } from 'emerald-ui';
import { Row, Col, Grid } from 'react-bootstrap'
import './css/Categories.css'
import CategoryTable from './CategoryTable'

class Categories extends Component {
    state = { categories: [] }

    async componentDidMount() {
        const response = await request.get('http://ec2-54-88-64-36.compute-1.amazonaws.com:3000/v1/category/1/childs')
        console.log(response)

        this.setState({ categories: response.data })
    }
    render() {
        return (
            <Grid fluid>
                <Row className="Category-title">
                    <Col className="search-label" xs={3} lg={2}>
                        <h1> Categories </h1>
                    </Col>

                </Row>
                <Row className="category-search">
                    <Col className="search-label" xs={3} lg={2}>
                        <label>Filtrar categorias </label>
                    </Col>
                    <Col xs={6} lg={6} className="search-input">
                        <SearchForm inputId="query" onSubmit={e => e.preventDefault()} onChange={e => { }} />
                    </Col>
                </Row>

                <CategoryTable categories ={this.state.categories} />
            </Grid>
        );
    }
}

export default Categories;
