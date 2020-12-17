import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../type';

const loginAPI = (data) => {
  return axios.post('/api/auth/login', data);
};

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result,
    });
  } catch (err) {
    yield put({
      type: LOGIN_FAILURE,
      payload: err.response,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

export default function* authSaga() {
  yield all([fork(watchLogin)]);
}
