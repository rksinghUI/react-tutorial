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
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/product'>Product</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/httpServiceCall'>HTTP service calls</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/forms'>React Forms</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/person'>Person</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/author'>Author</Link></li>
          <li style={{ 'display':'inline', 'padding':'20px'}}><Link style={{'color':'white'}} to='/course'>Course</Link></li>
        </ul>
      </div>
    );
  }
}

export default NavigationComponent;
