import React, { Component } from 'react';
import ChartBar from "./ChartBar";
import ExpansionPanel from 'emerald-ui/lib/ExpansionPanel';

class Dashboard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91]
                }
            ]
        };
    }


    render() {
        return (
            <div className="dashboard">
                {Object.entries(this.props.Student).length > 0 && <div className="body">
                    <div className="row">
                        <div className="col-lg-4 ">
                            <h1>{`ESTUDIANTE: ${this.props.Student.nombre}`}</h1>
                        </div>
                        <div className="col-lg-4 ">
                            <h1>{`${this.props.Student.login_number} Ingresos a SAVIO`}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <ExpansionPanel>
                            <ExpansionPanel.Summary>
                                <p style={{ margin: 0 }}> interaccion en la plataforma     </p>
                            </ExpansionPanel.Summary>
                            <ExpansionPanel.Content>
                                <div className="col-lg-4 ">
                                    <ChartBar DataSource={this.props.Student.graphs.am_attendees_courses} />
                                </div>
                                <div className="col-lg-4 ">
                                    <ChartBar DataSource={this.props.Student.graphs.am_resources_courses} />
                                </div>
                                <div className="col-lg-4 ">
                                    <ChartBar DataSource={this.props.Student.graphs.am_interaction_resources_courses} />
                                </div>
                            </ExpansionPanel.Content>
                        </ExpansionPanel>
                    </div>
                </div>}
            </div>
        );
    }

}

export default Dashboard;
