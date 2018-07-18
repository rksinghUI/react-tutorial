import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class NavigationComponent extends Component {
  render() {
    return (
      <div className="home">
        <ul>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/Home'>Home</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/Customer'>Customer</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/AboutUs'>about us</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationComponent;
