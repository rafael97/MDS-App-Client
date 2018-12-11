import React, { Component } from 'react';
import 'emerald-ui/lib/styles-ceb.css'
import { SearchForm, Table, Button } from 'emerald-ui';
import { Row, Col, Grid } from 'react-bootstrap'
import './css/Categories.css'

class Categories extends Component {
    render() {
        return (
            <Grid fluid>
                <Row className = "Category-title">
                <Col className="search-label" xs={3} lg={2}>
                    <h1> Categories </h1>
                    </Col>

                </Row>
                <Row className="category-search">
                    <Col className="search-label" xs={3} lg={2}>
                        <label>Filtrar categorias</label>
                    </Col>
                    <Col xs={6} lg={6} className="search-input">
                        <SearchForm inputId="query" onSubmit={e => e.preventDefault()} onChange={e => { }} />
                    </Col>
                </Row>
                <Row>
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
                                <td><Button color="primary"> primary</Button></td>
                            </tr>
                        </tbody>
                    </Table>
                    </Col>
                </Row>
            </Grid>
        );
    }
}

export default Categories;
