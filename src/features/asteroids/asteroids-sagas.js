import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { GET_ASTEROIDS, setAsteroidsSuccess } from './asteroids-actions';
import moment from 'moment';

import callApi from '../../utils/api-utils';
import Asteroids from '../../models/asteroids-builder';
import Asteroid from '../../models/asteroid-builder';

console.log('GO WITH .ENV VARIABLES');
console.log('PREPARE PROD ENVIRONMENT VARS');

const apiURL = 'https://api.nasa.gov';
const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
const endDate = moment().format('YYYY-MM-DD');
let dateRange = 'start_date=#start_date#&end_date=#end_date#';
const apiKey = '&api_key=0D8NTQqesnNtKhURI8hLFTlMrWTwsDhRDd8cpf0n';
const apiPath = '/neo/rest/v1/feed?';

const buildDateRange = () => {
  dateRange = dateRange.replace('#start_date#', startDate);
  dateRange = dateRange.replace('#end_date#', endDate);

  return dateRange;
};

function* getAsteroidsSaga() {
  try {
    const apiString = `${apiURL}${apiPath}${buildDateRange()}${apiKey}`;
    const data = yield call(callApi, apiString);

    const asteroids = Asteroids.build(data, Asteroid);
    yield put(setAsteroidsSuccess(asteroids));
  } catch (error) {
    console.error(error);
  }
}

function* asteroidsRootSaga() {
  yield all([yield takeLatest(GET_ASTEROIDS, getAsteroidsSaga)]);
}

const asteroidsSagas = [fork(asteroidsRootSaga)];

export default asteroidsSagas;
