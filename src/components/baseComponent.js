import React, { Component } from 'react';

let BaseComponent = (ModifiedComponent) => class extends Component {
  constructor () {
    super();
    this.state = {
      count : 0
    }
  }

  incrementCount() {
    this.setState({
      count: this.state.count+5
    })
  }

  render () {
    return (
      <div>
        <h3>The header from base component</h3>
        <ModifiedComponent count = {this.state.count} increment = {() => this.incrementCount()} />
      </div>
    )
  }
}

const CreateButton = (props) => {
  return (
    <button onClick={props.increment}>count -- {props.count}</button>
  )
}

const CreateLabel = (props) => {
  return (
    <label>This is from label {props.count}</label>
  )
}

let HeaderWithTextButton = BaseComponent(CreateButton);
let HeaderWithTextLabel = BaseComponent(CreateLabel);

class Basecontainer extends Component {
  render (){
    return(
      <div>
        <HeaderWithTextButton />
        <HeaderWithTextLabel />
      </div>
    )
  }
}

export default Basecontainer;