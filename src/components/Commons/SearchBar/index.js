import React, { Component } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';


import './Header.css';

class Header extends Component {
    constructor(props) {
        super()
        this.state = {
            activeKey: 1
        }
        this.handleChangePage = this.handleChangePage.bind(this)
    }

    handleChangePage(selectedKey) {
        this.setState({
            activeKey: selectedKey
        })
    }

    render() {
        return (
            <Fragment>
                <h2>SubCategories</h2>
                <SearchForm className="category-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerFilterCategories} />
                <CategoryTable categories={this.state.categoriesFilter} updateHandler={this.handlerUpdateCategoryByChild} />
            </Fragment>
    
  }
}

export default Header;
