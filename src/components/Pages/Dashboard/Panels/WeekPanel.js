import React, { Component } from 'react';
import ChartBar from "../Charts/ChartLine";
import ExpansionPanel from 'emerald-ui/lib/ExpansionPanel';

class WeekPanel extends Component {

    render() {
        return (
            <div className="row">
                <ExpansionPanel className="expansionPanel" >
                    <ExpansionPanel.Summary>
                        <p style={{ margin: 0 }}> Ingreso por semana en la plataforma     </p>
                    </ExpansionPanel.Summary>
                    <ExpansionPanel.Content>

                        <div align="center">
                            <ChartBar DataSource={this.props.graphs.am_login_by_week} />
                        </div>
                    </ExpansionPanel.Content>
                </ExpansionPanel>
            </div>

        );
    }

}

export default WeekPanel;
