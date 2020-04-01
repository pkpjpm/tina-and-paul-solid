import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import { DISMISS_LEGACY_INFO } from './actions/actionTypes';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function reducer(state = { showLegacyInfo: true }, action) {
  switch( action.type ) {
    case DISMISS_LEGACY_INFO:
      return Object.assign({}, state, { showLegacyInfo: false });

    default:
      return state;
  }
}

let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
