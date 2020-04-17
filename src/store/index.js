import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './root-reducer';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore() {
 return createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
 );
}