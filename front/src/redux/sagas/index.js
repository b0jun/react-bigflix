import { all, fork } from 'redux-saga/effects';
import dotenv from 'dotenv';
import axios from 'axios';
import authSaga from './authSaga';

dotenv.config();

axios.defaults.baseURL = process.env.REACT_APP_BASIC_SERVER_URL;
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(authSaga)]);
}
