import axios from 'axios';
import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  USER_LOADING_REQUEST,
  USER_LOADING_SUCCESS,
  USER_LOADING_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../type';

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

// 로그인
const loginAPI = (data) => {
  return axios.post('/api/auth/login', data);
};

function* login(action) {
  try {
    const result = yield call(loginAPI, action.data);
    console.log(result);
    yield put({
      type: LOGIN_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGIN_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogin() {
  yield takeEvery(LOGIN_REQUEST, login);
}

// 회원가입
const registerAPI = (data) => {
  return axios.post('/api/auth/register', data);
};

function* register(action) {
  try {
    const result = yield call(registerAPI, action.data);
    yield put({
      type: REGISTER_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REGISTER_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchRegister() {
  yield takeEvery(REGISTER_REQUEST, register);
}

// 유저 로딩
const userLoadingAPI = () => {
  return axios.get('/api/auth/check');
};

function* userLoading(action) {
  try {
    const result = yield call(userLoadingAPI, action.payload);
    yield put({
      type: USER_LOADING_SUCCESS,
      payload: result.data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: USER_LOADING_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchUserLoading() {
  yield takeEvery(USER_LOADING_REQUEST, userLoading);
}

// 로그아웃
const logoutAPI = () => {
  return axios.post('/api/auth/logout');
};

function* logout() {
  try {
    yield call(logoutAPI);
    yield put({
      type: LOGOUT_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOGOUT_FAILURE,
    });
  }
}

function* watchLogout() {
  yield takeEvery(LOGOUT_REQUEST, logout);
}

export default function* authSaga() {
  yield all([
    fork(watchLogin),
    fork(watchRegister),
    fork(watchUserLoading),
    fork(watchLogout),
  ]);
}
