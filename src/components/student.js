import React, { Component } from 'react';

class Student extends Component {
    constructor() {
        super();
        this.state = {
            Maths: 10
        }
    }

    marks = [
        { subject: 'English', marks: '34' },
        { subject: 'SST', marks: '84' },
        { subject: 'Science', marks: '64' },
        { subject: 'Maths', marks: '39' },
        { subject: 'Hindi', marks: '60' },
        { subject: 'Hindi', marks: '60' },
    ]

    createList = this.marks.map((a, id) =>
        <li>{id}----{a.subject} ---  {a.marks}</li>
    );

    updateMarks() {
        if (this.state.Maths < 100) {
            this.setState(
                {
                    Maths: this.state.Maths + 5
                }
            )
        } else {
            alert('Student cannot score above 100');
        }

    }
    render() {
        return (
            <div>
                <div>the student name is {this.props.name}</div>
                <div>the student rollNumber is {this.props.roll}</div>

                <div>Math - <span className={this.state.Maths > 35 ? 'greenText' : 'redText'}>{this.state.Maths}</span></div>
                <button onClick={() => this.updateMarks()}>Click to modify State</button>
                <br />

                <ul>{this.createList}</ul>
            </div>
        )
    }
}

export default Student;