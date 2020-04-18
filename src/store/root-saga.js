import { all } from "redux-saga/effects";

import { asteroidsSagas } from "../features/asteroids";

export default function* rootSagas() {
  yield all([
    ...asteroidsSagas
  ]);
}
