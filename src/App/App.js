import React, { Component } from 'react';
import { AppRoute } from '../router';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import reducer from '../redux/reducer';
import rootSaga from '../redux/saga';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
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
