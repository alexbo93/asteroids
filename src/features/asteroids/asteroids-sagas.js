import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { GET_ASTEROIDS, setAsteroidsSuccess } from './asteroids-actions';
import moment from 'moment';

import callApi from '../../utils/api-utils';
import Asteroids from '../../models/asteroids-builder';
import Asteroid from '../../models/asteroid-builder';
import { API_INFO } from '../../constants';

const apiURL = API_INFO.URL;
const startDate = moment().subtract(7, 'days').format('YYYY-MM-DD');
const endDate = moment().format('YYYY-MM-DD');
let dateRange = API_INFO.DATE_RANGE;
const apiKey = `&api_key=${API_INFO.API_KEY}`;
const apiPath = API_INFO.NEO_PATH;

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
