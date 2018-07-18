import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from './logo.svg';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';
import CustomerComponent from './components/costumer/costumer.component';
import HomeComponent from './components/home/home.component';
import AboutUsComponent from './components/about-us/about-us.component';
import ProductComponent from './components/product/product.component';
import HttpClientComponent from './components/serviceCall/HttpClient';
import NavigationComponent from './components/navigation/navigation.component';

ReactDOM.render(
  <BrowserRouter>
    <div className='App'>
      <div>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <NavigationComponent />
        </header>
      </div>
      <div style={{width:'70%', margin: '0 auto'}}>
        <Route path='/' component={App} />
        <Route path='/Home' component={HomeComponent} />
        <Route path='/Customer' component={CustomerComponent} />
        <Route path='/AboutUs' component={AboutUsComponent} />
        <Route path='/product' component={ProductComponent} />
        <Route path='/httpServiceCall' component={HttpClientComponent} />
      </div>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
