import axios from 'axios';
import { call, put, all, fork, throttle } from 'redux-saga/effects';
import {
  ADD_MYLIST_REQUEST,
  ADD_MYLIST_SUCCESS,
  ADD_MYLIST_FAILURE,
  CHECK_MYLIST_REQUEST,
  CHECK_MYLIST_SUCCESS,
  CHECK_MYLIST_FAILURE,
  REMOVE_MYLIST_REQUEST,
  REMOVE_MYLIST_SUCCESS,
  REMOVE_MYLIST_FAILURE,
} from '../type';

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;

// 찜 체크
const checkMylistAPI = (data) => {
  return axios.post('/api/mylist/check', data);
};

function* checkMylist(action) {
  try {
    const { data } = yield call(checkMylistAPI, action.data);
    yield put({
      type: CHECK_MYLIST_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: CHECK_MYLIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchCheckMylist() {
  yield throttle(200, CHECK_MYLIST_REQUEST, checkMylist);
}

// 찜 추가
const addMylistAPI = (data) => {
  return axios.post('/api/mylist/add', data);
};

function* addMylist(action) {
  try {
    yield call(addMylistAPI, action.data);
    yield put({
      type: ADD_MYLIST_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: ADD_MYLIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchAddMylist() {
  yield throttle(500, ADD_MYLIST_REQUEST, addMylist);
}

// 찜 제거
const removeMylistAPI = (data) => {
  return axios.post('/api/mylist/remove', data);
};

function* removeMylist(action) {
  try {
    yield call(removeMylistAPI, action.data);
    yield put({
      type: REMOVE_MYLIST_SUCCESS,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: REMOVE_MYLIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchRemoveMylist() {
  yield throttle(500, REMOVE_MYLIST_REQUEST, removeMylist);
}

export default function* mylistSaga() {
  yield all([fork(watchCheckMylist), fork(watchAddMylist), fork(watchRemoveMylist)]);
}
