import React, { Component } from 'react';
import axios from 'axios';

class HttpClientComponent extends Component {
  state = {
    listOFProducts: []
  }
  constructor() {
    super();
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        this.setState({ listOFProducts: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }
  render() {
    return (
      <div className="home">
        <h1>AXIOS Http client</h1>
        <p className="home-intro">
          To get started, edit and save to reload.
        </p>
        <table border='1' cellPadding='10'>
          <tbody>
            {this.state.listOFProducts.map((item, key) =>
              <tr key={key}>
                <td>
                  {item.id}
                </td>
                <td>
                  {item.title}
                </td>
                <td>
                  {item.body}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default HttpClientComponent;
