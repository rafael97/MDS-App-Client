import React, { Component, Fragment } from 'react';
import SearchForm from 'emerald-ui/lib/SearchForm';
import Button from 'emerald-ui/lib/Button';



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

    render() {
        return (
            <div className="row">
                <Fragment>
                    <div className="col-lg-8 ">
                        <SearchForm className="Student-search" inputId="query" onSubmit={e => e.preventDefault()} onChange={this.handlerSearchStudents} />
                    </div>
                    <div className="col-lg-2 ">
                        <Button color="info" className="submmit-search" onClick={this.handlerSearchStudents} >Buscar</Button>
                    </div>
                </Fragment>

            </div>)
    }
}

export default SearchBar;
