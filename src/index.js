import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
//import reducer from './reducers'
import posApp from './reducers/root_reducer'

import {fetchProducts} from './actions/productListActions';

import thunk from 'redux-thunk'
const middleware = [ thunk ]



const store = createStore(
    posApp, 
    applyMiddleware(...middleware))
console.log('[DEBUG] store created');
store.dispatch(fetchProducts());

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();
render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  )
