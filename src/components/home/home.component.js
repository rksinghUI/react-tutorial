import React, { Component } from 'react';
import Hello from '../hello';
import Student from '../student';
import Clock from '../clock';
import Employee from '../employee';
import Basecontainer from '../baseComponent';
import PasswordComponent from '../passwordComponent';

class BaseHello extends Component {
  render() {
    return (
      <div>
        Hello From baseClass
      </div>
    )
  }
}

let ModifiedComponent = (CallHello) =>
  class extends Component {
    render() {
      return (
        <div><CallHello /><button>click</button></div>
      )
    }
  }

var CallModifiedComponent = ModifiedComponent(BaseHello);


class HomeComponent extends Component {
  EmployeeData = [
    { id: 101, name: 'test1', skills: ['angular', 'node', 'react'] },
    { id: 102, name: 'test2', skills: ['node', 'react'] },
    { id: 103, name: 'test3', skills: ['angular', 'react'] },
    { id: 104, name: 'test4', skills: ['angular'] }
  ]
  render() {
    var country = {
      name: 'India',
      place: 'MP',
    };
    return (
      <div className="home">
        <h1>Home Component</h1>
        <p className="home-intro">
          To get started, edit and save to reload.
        </p>
        <h2>
          React {country.name}
        </h2>
        <p>{3 + 4}</p>
        <Hello name="Accenture" value="Hello" />
        <br />
        <Student name="Mathew" roll="34567" />
        <br />
        <Clock />
        <br />
        <Employee employeeData={this.EmployeeData} />

        <CallModifiedComponent />

        <hr />

        <Basecontainer />
        <hr />
        <PasswordComponent />
      </div>
    );
  }
}

export default HomeComponent;
