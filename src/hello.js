import React, { Component } from 'react';

class Hello extends Component {
    constructor() {
        super();
        this.state = {
            noOfEmps: 2000
        }
    }

    changeValue() {
        this.setState(
            {
                noOfEmps: 3000
            }
        )
    }

    render() {
        return (
            <div>
                <h3>{this.props.value} {this.props.name}</h3>
                <h3>{this.props.name} has {this.state.noOfEmps} Employees</h3>
                <button onClick={() => this.changeValue()}>Click to modify State</button>
            </div>
        )
    }
}

export default Hello;