import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
// import * as serviceWorker from "./serviceWorker"

import rootReducer from './services/reducer/index'
import { createStore } from 'redux';

const store=createStore(rootReducer);
// console.log("Store : ",store);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
