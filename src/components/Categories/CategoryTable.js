import React from 'react'
import {Table, Button } from 'emerald-ui';
import { Row, Col } from 'react-bootstrap'

const CategoryTable = (props) => {
    console.log(props.categories);
    

    return (<Row>
        <Col xs={12} lg={12} className="search-input">
            <Table hover>
                <thead>
                    <tr>
                        <th>Codigo</th>
                        <th>Nombre</th>
                        <th>detalle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>Administrator</td>
                        <td>  <Button color="info" href = "/courses"> info </Button></td>
                    </tr>
                </tbody>
            </Table>
            </Col>
        </Row>)
}


export default CategoryTable;