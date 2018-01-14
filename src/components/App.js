import React, { Component } from 'react';
import './App.css';

import ProductsPane from '../containers/productsPane'

// var _ = require('lodash');

class App extends Component {
  render() {
    return (
      <div className="App"  >
        <header className="App-header">
          <h2 className="App-title">POS Client</h2>
        </header>
        <ProductsPane/>
      </div>
    );
  }
}

export default App;
