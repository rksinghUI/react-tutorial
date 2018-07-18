import React, { Component } from 'react';

class Employee extends Component {

  createInnerList = (b) =>
    b.map((b) =>
      <li>{b}</li>
    )

  createList = this.props.employeeData.map((a, id) =>
    <li>{id}----{a.id} ---  {a.name} --- <ul>{this.createInnerList(a.skills)}</ul>
    </li>
  );

  render() {
    return (
      <ul>{this.createList}</ul>
    )
  }
}
export default Employee;