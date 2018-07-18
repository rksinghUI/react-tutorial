import React, { Component } from 'react';

class ProductComponent extends Component {
  ProductData = [
    { id: 101, name: 'Mobile', price: 12000 },
    { id: 102, name: 'Laptop', price: 15000 },
    { id: 103, name: 'Fridge', price: 18000 },
    { id: 104, name: 'Television', price: 12000 }
  ]
  listOFProducts = this.ProductData.map((item, key) =>
    <tr key={key}>
      <td>
        {item.id}
      </td>
      <td>
        {item.name}
      </td>
      <td>
        {item.price}
      </td>
    </tr>
  )
  render() {
    return (
      <div className="home">
        <h1>Product Component</h1>
        <table border='1' cellPadding='10'>
          <tbody>
            {this.listOFProducts}
          </tbody>
        </table>
      </div>
    );
  }
}

export default ProductComponent;
