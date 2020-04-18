import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';
import rootSagas from './root-saga';
import logger from 'redux-logger';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    composeEnhancer(applyMiddleware(sagaMiddleware, logger))
  );

  sagaMiddleware.run(rootSagas);
  return store;
};

export default configureStore;
