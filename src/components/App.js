import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import ProductsPane from '../containers/productsPane';
import CartPane from '../containers/cartpane';
import Notifications from 'react-notify-toast';

// var _ = require('lodash');

class App extends Component {
  render() {
    return (
      <div className='container'>
        <Notifications />
        <header>
          <h2>POS Client</h2>
        </header>
        <div className='row'>
          <div className='col-4'>
            <ProductsPane/>
          </div>
          <div className='col-8'>
            <CartPane/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
