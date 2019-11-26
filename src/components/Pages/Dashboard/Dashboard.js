import React, { Component } from 'react';
import request from '../../../utils/requets';
const { REACT_APP_URL_API = ' http://localhost:3050/' } = process.env



class Dashboard extends Component {

    constructor(props) {
        super()
        console.log('this.props.Student');
        this.state = {
            Student: props.Student,
            loadingResources: true
        }
    }



    async componentDidMount() {

    }



    async    componentWillReceiveProps() {
        console.log(this.props.Student.code, this.state.Student.code);
        console.log(this.props.Student.code !== this.state.Student.code);

        if (this.props.Student.code !== this.state.Student.code) {
            console.log('componentWillReceiveProps');
            console.log(this.props.Student);
            this.setState({
                Student: this.props.Student,
                loadingResources: false
            })
        }



    }




    render() {
        return (
            <div className="dashboard">
                <h1>{`ESTUDIANTE: ${this.state.Student.nombre}`}</h1>
            </div>
        );
    }
}

export default Dashboard;
