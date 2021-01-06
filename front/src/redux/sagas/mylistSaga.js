import axios from 'axios';
import { call, put, all, fork, throttle, takeEvery } from 'redux-saga/effects';
import { movieApi, tvApi } from '../../lib/api/contentsAPI';
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
  LOAD_MYLIST_REQUEST,
  LOAD_MYLIST_SUCCESS,
  LOAD_MYLIST_FAILURE,
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

// 찜 목록 불러오기
const loadMylistAPI = (data) => {
  return axios.post('/api/mylist/lists', data);
};

const getContentsAPI = async (mylist) => {
  const result = await Promise.all(
    mylist.map(async (list) => {
      if (list.isMovie) {
        const { data } = await movieApi.movieDetail(list.contentId);
        data.isMovie = true;
        return data;
      } else {
        const { data } = await tvApi.tvDetail(list.contentId);
        data.isMovie = false;
        return data;
      }
    })
  );
  return result;
};

function* loadMylist(action) {
  try {
    const {
      data: { mylist },
    } = yield call(loadMylistAPI, action.data);
    const results = yield call(getContentsAPI, mylist);
    yield put({
      type: LOAD_MYLIST_SUCCESS,
      payload: results,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MYLIST_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMylist() {
  yield takeEvery(LOAD_MYLIST_REQUEST, loadMylist);
}

export default function* mylistSaga() {
  yield all([
    fork(watchCheckMylist),
    fork(watchAddMylist),
    fork(watchRemoveMylist),
    fork(watchLoadMylist),
  ]);
}
