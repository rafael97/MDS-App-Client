import React, { Component, Fragment } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';


class SearchBar extends Component {
    constructor(props) {
        super()
        this.state = {
            activeKey: 1,
            StudentCode: {}
        }
        this.handleChangePage = this.handleChangePage.bind(this)
        this.handlerSearchStudents = this.handlerSearchStudents.bind(this);

    }

    handlerSearchStudents(event) {
        this.setState({
            StudentCode: event.target.value
        })
        console.log(event.target.value.toLowerCase());

    }

    handleChangePage(selectedKey) {
        this.setState({
            activeKey: selectedKey
        })
    }

    render() {
        return (
            <Fragment>
                <SearchForm className="Student-search" inputId="query" clearable onSubmit={e => e.preventDefault()} onChange={this.handlerSearchStudents} />
            </Fragment>)
    }
}

export default SearchBar;
