import React, { Component } from 'react';
import RefFormsComponent from './refs-in-forms';

class ReactFormsComponent extends Component {
  constructor() {
    super();
    this.state = {
      customerName: 'Mack',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    alert('Customer Name is: '+ this.state.customerName);
  }

  handleChange(e) {
    this.setState({customerName: e.target.value});
  }

  render() {
    return (
      <div className="home">
      <h1>Form Component</h1>
        <p className="home-intro">
          To get started, edit and save to reload.
        </p>
        <form onSubmit={this.handleSubmit}>
          Enter Customer Name: 
          <input type='text' value={this.state.customerName} onChange={this.handleChange} />
          <input type='submit' value='Submit' />
        </form>
          <hr/>
         <h1>Refs Form Component</h1>
         <RefFormsComponent />
      </div>
    );
  }
}

export default ReactFormsComponent;
