import { all } from 'redux-saga/effects';

import { asteroidsSagas } from '../features/asteroids';
import { podSagas } from '../features/pod';

export default function* rootSagas() {
  yield all([...asteroidsSagas, ...podSagas]);
}
