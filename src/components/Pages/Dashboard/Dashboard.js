import React, { Component } from 'react';
import request from '../../../utils/requets';
const { URL_API = ' http://localhost:3050/' } = process.env



class Dashboard extends Component {

    constructor(props) {
        super()

        this.state = {
            Student: {},
            loadingResources: true
        }
    }

    async componentDidMount() {
        let studentCode = 0
        let studentResponse = []
        if (this.props.location) {
            console.log(this.props.location.state);

            if (this.props.location.state) {
                this.setState({
                    student: this.props.location.state.Student,
                    loadingResources: false
                })
            }
        }

        // const response = await request.get(`${URL_API}course/${studentCode}`)


        // if (!Array.isArray(response.data)) {
        //     studentResponse = response.data.student;
        // }

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
