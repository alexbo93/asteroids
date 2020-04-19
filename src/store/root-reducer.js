import { combineReducers } from 'redux';
import { asteroidsReducer as asteroids } from '../features/asteroids';
import { podReducer as pod } from '../features/pod';

export default combineReducers({
  asteroids,
  pod,
});
