import React, { Component } from 'react';
import { AppRoute } from '../router';
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import thunk from "redux-thunk";
import reducer from '../redux/reducer';


const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRoute />
      </Provider>
    );
  }
}

export default App;
