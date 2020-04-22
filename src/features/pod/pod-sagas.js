import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { GET_POD, setPodSuccess } from './pod-actions';

import callApi from '../../utils/api-utils';
import { API_INFO } from '../../constants';

const apiURL = API_INFO.URL;
const apiPath = API_INFO.POD_PATH;
const apiKey = `?api_key=${API_INFO.API_KEY}`;

function* getPodSaga() {
  try {
    const apiString = `${apiURL}${apiPath}${apiKey}`;
    const data = yield call(callApi, apiString);

    yield put(setPodSuccess(data));
  } catch (error) {
    console.error(error);
  }
}

function* podRootSaga() {
  yield all([yield takeLatest(GET_POD, getPodSaga)]);
}

const podSagas = [fork(podRootSaga)];

export default podSagas;
