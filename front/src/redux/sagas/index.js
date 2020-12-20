import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import axios from 'axios';
import contentsSaga from './contentsSaga';

axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(authSaga), fork(contentsSaga)]);
}
