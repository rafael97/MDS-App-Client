import React from 'react'
import {Table, Button, TableHeader, ExpansionTableRow, ExpansionTableRowGroup }  from 'emerald-ui/lib';
import { LinkContainer } from 'react-router-bootstrap'


const renderCourse = (courses) => {

     
    return courses.map(course => (
        <ExpansionTableRow useCheckbox={false} key={`course-${course.id}`}>
            <ExpansionTableRow.Summary>
                <td><b>{course.shortname}</b></td>
                <td>&#x25BC;</td>
            </ExpansionTableRow.Summary>
            <ExpansionTableRow.Content>
                <div>
                    <Table condensed>
                        <thead>
                            <tr>
                                <th>Attribute</th>
                                <th>Detail</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><b>ID</b></td>
                                <td><b>{String(course.id) }</b></td>
                            </tr>
                            <tr>
                                <td><b>Fullname</b></td>
                                <td>{course.fullname}</td>
                            </tr>
                            <tr>
                                <td><b>Detail</b></td>
                                <td>  <LinkContainer to={{ pathname: "/Stats", state: { CourseId: String(course.id)} }}>
                                <Button color="info"> info </Button>
                                </LinkContainer></td>
                            </tr>
                           
                        </tbody>
                    </Table>
                </div>
            </ExpansionTableRow.Content>
        </ExpansionTableRow>
    ))
}

const CourseTable = (props) => {
    console.log('course',props.course);
    return (
        <div>
            <ExpansionTableRowGroup id="g1">
                <TableHeader useCheckbox={false}>
                    <th>Name</th>
                    <th>Details</th>
                </TableHeader>
                {renderCourse(props.course)}
            </ExpansionTableRowGroup>
        </div>
    )
}


export default CourseTable;