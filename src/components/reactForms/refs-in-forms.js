import React, { Component } from 'react';

class RefFormsComponent extends Component {
  handleSubmit(event) {
    alert('Customer Name is: '+ this.refs.cName.value + '\n Customer email is: '+ this.refs.cEmail.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="home">
      <h1>Form Component</h1>
        <p className="home-intro">
          To get started, edit and save to reload.
        </p>
        <form onSubmit={() => this.handleSubmit()}>
          Enter Customer Name: 
          <input type='text' ref='cName'/>
          <br/><br/>
          Enter Customer Email: 
          <input type='email'  ref='cEmail' />
          <br/><br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default RefFormsComponent;
