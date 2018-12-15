import React from 'react'
import ExpansionTableRowGroup from 'emerald-ui/lib/ExpansionTableRowGroup';
import ExpansionTableRow from 'emerald-ui/lib/ExpansionTableRow';
import TableHeader from 'emerald-ui/lib/TableHeader';
import Table from 'emerald-ui/lib/Table';


const renderCategories = (categories) => {
    return categories.map(category => (
        <ExpansionTableRow useCheckbox={false} key={`category-${category.id}`}>
            <ExpansionTableRow.Summary>
                <td><b>{category.name}</b></td>
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
                                <td><b>{String(category.id) }</b></td>
                            </tr>
                            <tr>
                                <td><b>Name</b></td>
                                <td><b>{String(category.name).toUpperCase()}</b></td>
                            </tr>

                            <tr>
                                <td><b>Description</b></td>
                                <td>{category.description}</td>
                            </tr>
                            <tr>
                                <td><b>Number of child categories</b></td>
                                <td>{category.categories.length}</td>
                            </tr>
                            <tr>
                                <td><b>Child categories names</b></td>
                                <td>{category.categories.map(childCategory => childCategory.name).join(', ')}</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </ExpansionTableRow.Content>
        </ExpansionTableRow>
    ))
}

const CategoryTable = (props) => {
    return (
        <div>
            <ExpansionTableRowGroup id="g1">
                <TableHeader useCheckbox={false}>
                    <th>Name</th>
                    <th>Details</th>
                </TableHeader>
                {renderCategories(props.categories)}
            </ExpansionTableRowGroup>
        </div>
    )
}


export default CategoryTable;