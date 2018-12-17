import React, { Component } from 'react';
import request from '../../../utils/requets';
import  SearchForm  from 'emerald-ui/lib/SearchForm';
import Grid from 'react-bootstrap/lib/Grid'
import CategoryTable from './CategoryTable'
import './css/Categories.css'


class Categories extends Component {
    constructor(props){
        super()

        this.state = { 
            categories: [],
            categoriesFilter: [],
            loadingResources: true
        }

        this.handlerFilterCategories = this.handlerFilterCategories.bind(this);
    }

    async componentDidMount() {
        const response = await request.get('http://ec2-54-88-64-36.compute-1.amazonaws.com:3000/v1/category/0/childs')
        this.setState({ categories: response.data, categoriesFilter: response.data , loadingResources:false})
    }

    handlerFilterCategories(event){
        this.setState({
            categoriesFilter: this.state.categories.filter(category => category.name.toLowerCase().includes(event.target.value.toLowerCase()))
        })
    }

    render() {
        return (
            <Grid >
                <SearchForm className="category-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerFilterCategories}/>
                <CategoryTable categories ={this.state.categoriesFilter} />
            </Grid>
        );
    }
}

export default Categories;
