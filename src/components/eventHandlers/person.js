import React, { Component } from 'react';
import axios from 'axios';

class PostMethodComponent extends Component {
  state = {
    name: ''
  }

  handleSubmit = event => {
    event.preventDefault();
    const user = {
      name: this.state.name
    }
    axios.post('https://jsonplaceholder.typicode.com/users', { user })
      .then((response) => {
        console.log(response);
        console.log(response.data);
        alert('Data posted for ' + response.data.user.name);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  handleChange = event => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="home">
        <h1>Person Component - POST Form Data</h1>
        <p className="home-intro">
          To get started, edit and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          Enter person name:
          <input type='text' onChange={this.handleChange} />
          <input type='submit' value='Add' />
        </form>
      </div>
    );
  }
}

export default PostMethodComponent;
