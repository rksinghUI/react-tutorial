import React, { Component } from 'react';

let BaseComponent = (ModifiedComponent) => class extends Component {
  constructor () {
    super();
    this.state = {
      password : 'password',
      needPassword: 'yes'
    }
  }

  render () {
    return (
      <div>
        <h3>password component</h3>
        <ModifiedComponent passState = {this.state} />
      </div>
    )
  }
}

const CreateButton = (props) => {
  console.log(props);
  if (props.passState.needPassword === 'yes') {
    return (
      <button>I got password -- {props.passState.password}</button>
    )
  } else {
    return (
      <button>I did not recieve password </button>
    )
  }
  
}

let HeaderWithTextButton = BaseComponent(CreateButton);

class PasswordComponent extends Component {
  render (){
    return(
      <div>
        <HeaderWithTextButton />
      </div>
    )
  }
}

export default PasswordComponent;