import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import Immutable from 'seamless-immutable';

import reducers from './reducers';
import rootSaga from './sagas';

let store = {};

function initializedStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  store = {
    ...createStore(
      reducers,
      Immutable(initialState),
      applyMiddleware(sagaMiddleware),
    ),
    sagaTask: sagaMiddleware.run(rootSaga),
  };
  return store;
}

export { store };

export default initializedStore;
