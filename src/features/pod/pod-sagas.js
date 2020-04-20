import { all, call, put, takeLatest, fork } from 'redux-saga/effects';
import { GET_POD, setPodSuccess } from './pod-actions';

import callApi from '../../utils/api-utils';
// import POD from '../../models/pod-builder';

console.log('GO WITH .ENV VARIABLES');
console.log('PREPARE PROD ENVIRONMENT VARS');

const apiURL = 'https://api.nasa.gov';
const apiPath = '/planetary/apod';
const apiKey = '?api_key=0D8NTQqesnNtKhURI8hLFTlMrWTwsDhRDd8cpf0n';

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
