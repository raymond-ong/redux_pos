import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import ProductsPane from '../containers/productsPane';
import CartPane from '../containers/cartpane';
import Notifications from 'react-notify-toast';

import 'font-awesome/css/font-awesome.min.css'

// var _ = require('lodash');
var FontAwesome = require('react-fontawesome')

class App extends Component {
  render() {
    return (
      <div>
      
      <Notifications />      
      <nav className="navbar navbar-light navbar-xs" style={{"background-color": "#e3f2fd"}}>        
        <h2 class="navbar-brand mb-0">
          <FontAwesome className="times" style={{marginRight : 10}} name="fax"/>
          POS Client
        </h2>
      </nav>        

      <div className='container-fluid mt-1'>
        <div className='row'>
          <div className='col-4'>
            <ProductsPane/>
          </div>
          <div className='col-8'>
            <CartPane/>
          </div>
        </div>
      </div>

      </div>
    );
  }
}

export default App;
