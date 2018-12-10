import React, { Component } from 'react';
import 'emerald-ui/lib/styles-ceb.css'
import { SearchForm,  Table,Button } from 'emerald-ui';

class Categories extends Component {
  render() {
    return (
        <div className="Categories">
        <h1> Categories </h1>
      <label>filtrar categorias</label>
      <div>    
        <SearchForm inputId="query" onSubmit={e => e.preventDefault()} onChange={e => {}}/>
    
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
      <td><Button color ="primary"> primary</Button></td>
    </tr>
  </tbody>
</Table>
      </div>
      </div>
      );
  }
}

export default Categories;
