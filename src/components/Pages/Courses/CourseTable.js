import React from 'react'
import ExpansionTableRowGroup from 'emerald-ui/lib/ExpansionTableRowGroup';
import ExpansionTableRow from 'emerald-ui/lib/ExpansionTableRow';
import TableHeader from 'emerald-ui/lib/TableHeader';
import Table from 'emerald-ui/lib/Table';


const renderCourse = (courses) => {
    console.log('renderCourse',courses);
    return courses.map(course => (
        <ExpansionTableRow useCheckbox={false} key={`course-${course.id}`}>
            <ExpansionTableRow.Summary>
                <td><b>{course.name}</b></td>
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
                                <td><b>Name</b></td>
                                <td><b>{String(course.name).toUpperCase()}</b></td>
                            </tr>

                            <tr>
                                <td><b>Description</b></td>
                                <td>{course.description}</td>
                            </tr>
                            <tr>
                                <td><b>Number of child Course</b></td>
                                <td>{course.categories.length}</td>
                            </tr>
                            <tr>
                                <td><b>Child Course names</b></td>
                                <td>{course.categories.map(childcourse => childcourse.name).join(', ')}</td>
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