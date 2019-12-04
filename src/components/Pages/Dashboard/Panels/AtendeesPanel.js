import React, { Component } from 'react';
import ChartBar from "../Charts/ChartBar";
import ExpansionPanel from 'emerald-ui/lib/ExpansionPanel';

class AtendeesPanel extends Component {

    render() {
        return (
            <div className="row">
                <ExpansionPanel className="expansionPanel"  >
                    <ExpansionPanel.Summary>
                        <p style={{ margin: 0 }}> Interaccion en la plataforma     </p>
                    </ExpansionPanel.Summary>
                    <ExpansionPanel.Content>
                        <div className="col-lg-4 ">
                            <ChartBar DataSource={this.props.graphs.am_attendees_courses} />
                        </div>
                        <div className="col-lg-4 ">
                            <ChartBar DataSource={this.props.graphs.am_resources_courses} />
                        </div>
                        <div className="col-lg-4 ">
                            <ChartBar DataSource={this.props.graphs.am_interaction_resources_courses} />
                        </div>
                    </ExpansionPanel.Content>
                </ExpansionPanel>
            </div>

        );
    }

}

export default AtendeesPanel;
