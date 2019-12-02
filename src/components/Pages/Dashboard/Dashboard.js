import React, { Component } from 'react';
import AtendeesPanel from "./Panels/AtendeesPanel";
import CompliancePanel from "./Panels/CompliancePanel";
import WeekPanel from "./Panels/WeekPanel";

class Dashboard extends Component {

    render() {
        return (
            <div className="dashboard">
                {Object.entries(this.props.Student).length > 0 && <div className="body">
                    <div className="row">
                        <div className="col-xs-6 ">
                            <h1>{`ESTUDIANTE: ${this.props.Student.nombre}`}</h1>
                        </div>
                        <div className="col-lg-3 label-ingresos">
                            <h1>{`${this.props.Student.login_number} Ingresos a SAVIO`}</h1>
                        </div>
                    </div>
                    <AtendeesPanel graphs={this.props.Student.graphs} />
                    <CompliancePanel graphs={this.props.Student.graphs} />
                    <WeekPanel graphs={this.props.Student.graphs} />
                </div>}
            </div>
        );
    }
}

export default Dashboard;
