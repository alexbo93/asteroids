import { all, call, takeLatest, fork } from "redux-saga/effects";
import { GET_ASTEROIDS } from "./asteroids-actions";

function* getAsteroidsSaga() {
  console.log('calling get asteroids sagas');
}

function* asteroidsRootSaga() {
  yield all([yield takeLatest(GET_ASTEROIDS, getAsteroidsSaga)]);
}

const asteroidsSagas = [fork(asteroidsRootSaga)];

export default asteroidsSagas;