import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import counter from './reducer';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Root
let destination = document.getElementById('root');
// Store
let store = createStore(counter);



ReactDOM.render(
  // Giving all components access to the Provider
  <Provider store={store}>
    <App/>
  </Provider>,
  destination
);