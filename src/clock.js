import React, { Component } from 'react';

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            date: new Date()
        }
    }

    componentDidMount(){
      this.timerID = setInterval (
        () => this.tick(), 1000
      )
    }
  

    componentWillUnmount() {
      clearInterval(this.timerID);
    }

    tick() {
        this.setState(
            {
                date: new Date()
            }
        )
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
                <h3>{this.state.date.toLocaleTimeString()}</h3>
            </div>
        )
    }
}

export default Clock;