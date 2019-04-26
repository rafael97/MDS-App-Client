import React from 'react'
import ShowMore from 'emerald-ui/lib/ShowMore';
import { Table, ExpansionPanel, ExpansionTableRow, ExpansionTableRowGroup } from 'emerald-ui/lib';


const modulesrender = (modules) => {
    if (!modules) return;

    return modules.map(module => (
        <li key={`module-${module.id}`}>{module.name}</li>
    ))
}

const weeksrender = (weeks) => {
    if (!weeks) return;

    return weeks.map(week => (
        <ExpansionTableRow useCheckbox={false} key={`week-${week.id}`}>
            <ExpansionTableRow.Summary>
                <td><b>{week.name}</b></td>
                <td>&#x25BC;</td>
            </ExpansionTableRow.Summary>
            <ExpansionTableRow.Content>
                <div>
                    <Table condensed>
                        <thead>
                            <tr>
                                <th>Atributo</th>
                                <th>Detalle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>Resumen</b></td>
                                <td><b>{week.summary}</b></td>
                            </tr>
                            <tr>
                                <td><b>Modulos</b></td>
                                <td><ul>
                                <ShowMore toggle show={2}>
                                {modulesrender(week.modules)}
                                </ShowMore>
                                </ul>
                                </td>
                            </tr>


                        </tbody>
                    </Table>
                </div>
            </ExpansionTableRow.Content>
        </ExpansionTableRow>
    ))
}

const Detail = (props) => {
    console.log(props.course.weeks);

    return (
        <div>

            <ExpansionPanel>
                <ExpansionPanel.Summary>
                    <h3>Semanas</h3>
                </ExpansionPanel.Summary>
                <ExpansionPanel.Content>
                    <ExpansionTableRowGroup id="g1">
                        {weeksrender(props.course.weeks)}
                    </ExpansionTableRowGroup>
                </ExpansionPanel.Content>
            </ExpansionPanel>





        </div>
    )
}


export default Detail;