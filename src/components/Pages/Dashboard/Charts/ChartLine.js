import React, { Component } from "react";
import Chart from "react-apexcharts";

class chartBar extends Component {
    constructor(props) {
        super(props);
        console.log('this.props');
        console.log(this.props);

        const { DataSource } = this.props
        console.log('DataSource');
        console.log(DataSource);

        this.state = {
            options: {
                title: {
                    text: DataSource.title,
                    align: 'center'
                },
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: DataSource.xAxis
                }
            },
            series: [
                {
                    name: DataSource.seriesName,
                    data: DataSource.yAxis
                }
            ]
        };
    }

    render() {
        return (
            <div className="app">
                <div className="row">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="600"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default chartBar;