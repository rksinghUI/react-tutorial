import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import CustomerComponent from './components/costumer/costumer.component';
import HomeComponent from './components/home/home.component';
import AboutUsComponent from './components/about-us/about-us.component';

ReactDOM.render(
<BrowserRouter>
    <div> 
    <Route path='/' component={App} />
    <Route path='/Home' component={HomeComponent} />
    <Route path='/Customer' component={CustomerComponent} />
    <Route path='/AboutUs' component={AboutUsComponent} />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
