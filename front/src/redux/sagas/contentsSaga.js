import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { movieApi, tvApi } from '../../lib/api/contentsAPI';
import {
  GET_RANDOM_FAILURE,
  GET_RANDOM_REQUEST,
  GET_RANDOM_SUCCESS,
  LOAD_HOME_FAILURE,
  LOAD_HOME_REQUEST,
  LOAD_HOME_SUCCESS,
  LOAD_MOVIE_FAILURE,
  LOAD_MOVIE_REQUEST,
  LOAD_MOVIE_SUCCESS,
  LOAD_TV_FAILURE,
  LOAD_TV_REQUEST,
  LOAD_TV_SUCCESS,
} from '../type';

// Home Contents
const loadPopularMovieAPI = () => {
  return movieApi.popularMovie();
};

const loadPopularTVAPI = () => {
  return tvApi.popularTV();
};

const loadTopRatedMovieAPI = () => {
  return movieApi.topRatedMovie();
};
const loadTopRatedTVAPI = () => {
  return tvApi.topRatedTV();
};

const loadAiringTodayTVAPI = () => {
  return tvApi.airingTodayTV();
};

function* loadHome() {
  try {
    const {
      data: { results: popularMovie },
    } = yield call(loadPopularMovieAPI);
    const {
      data: { results: popularTV },
    } = yield call(loadPopularTVAPI);
    const {
      data: { results: topRatedMovie },
    } = yield call(loadTopRatedMovieAPI);
    const {
      data: { results: topRatedTV },
    } = yield call(loadTopRatedTVAPI);
    const {
      data: { results: airingTodayTV },
    } = yield call(loadAiringTodayTVAPI);

    yield put({
      type: LOAD_HOME_SUCCESS,
      payload: {
        popularMovie,
        popularTV,
        topRatedMovie,
        topRatedTV,
        airingTodayTV,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_HOME_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadHome() {
  yield takeEvery(LOAD_HOME_REQUEST, loadHome);
}

// TV Contents
const loadTvTrendingDayAPI = () => {
  return tvApi.tvTrendingDay();
};

const loadTvTrendWeekAPI = () => {
  return tvApi.tvTrendingWeek();
};

function* loadTV() {
  try {
    const {
      data: { results: tvTrendingDay },
    } = yield call(loadTvTrendingDayAPI);
    const {
      data: { results: tvTrendingWeek },
    } = yield call(loadTvTrendWeekAPI);

    yield put({
      type: LOAD_TV_SUCCESS,
      payload: {
        tvTrendingDay,
        tvTrendingWeek,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_TV_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadTV() {
  yield takeEvery(LOAD_TV_REQUEST, loadTV);
}

// Movie Contents
const loadMovieTrendingDayAPI = () => {
  return movieApi.movieTrendingDay();
};

const loadMovieTrendWeekAPI = () => {
  return movieApi.movieTrendingWeek();
};

function* loadMovie() {
  try {
    const {
      data: { results: movieTrendingDay },
    } = yield call(loadMovieTrendingDayAPI);
    const {
      data: { results: movieTrendingWeek },
    } = yield call(loadMovieTrendWeekAPI);

    yield put({
      type: LOAD_MOVIE_SUCCESS,
      payload: {
        movieTrendingDay,
        movieTrendingWeek,
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_MOVIE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadMovie() {
  yield takeEvery(LOAD_MOVIE_REQUEST, loadMovie);
}

// Random TopSection
function* getRandom() {
  try {
    const {
      data: { results: popularMovie },
    } = yield call(loadPopularMovieAPI);
    const {
      data: { results: tvTrendingWeek },
    } = yield call(loadTvTrendWeekAPI);
    const {
      data: { results: movieTrendingWeek },
    } = yield call(loadMovieTrendWeekAPI);
    yield put({
      type: GET_RANDOM_SUCCESS,
      payload: {
        popularMovie: popularMovie[Math.floor(Math.random() * 20)],
        tvTrendingWeek: tvTrendingWeek[Math.floor(Math.random() * 20)],
        movieTrendingWeek: movieTrendingWeek[Math.floor(Math.random() * 20)],
      },
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: GET_RANDOM_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchGetRandom() {
  yield takeEvery(GET_RANDOM_REQUEST, getRandom);
}

export default function* contentsSaga() {
  yield all([
    fork(watchLoadHome),
    fork(watchLoadTV),
    fork(watchLoadMovie),
    fork(watchGetRandom),
  ]);
}
