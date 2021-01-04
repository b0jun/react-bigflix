import { call, put, takeEvery, all, fork } from 'redux-saga/effects';
import { movieApi, multiApi, tvApi } from '../../lib/api/contentsAPI';
import {
  GET_RANDOM_FAILURE,
  GET_RANDOM_REQUEST,
  GET_RANDOM_SUCCESS,
  LOAD_DETAIL_FAILURE,
  LOAD_DETAIL_REQUEST,
  LOAD_DETAIL_SUCCESS,
  LOAD_GENRE_FAILURE,
  LOAD_GENRE_REQUEST,
  LOAD_GENRE_SUCCESS,
  LOAD_HOME_FAILURE,
  LOAD_HOME_REQUEST,
  LOAD_HOME_SUCCESS,
  LOAD_MOVIE_FAILURE,
  LOAD_MOVIE_REQUEST,
  LOAD_MOVIE_SUCCESS,
  LOAD_SEASON_FAILURE,
  LOAD_SEASON_REQUEST,
  LOAD_SEASON_SUCCESS,
  LOAD_SIMILAR_FAILURE,
  LOAD_SIMILAR_REQUEST,
  LOAD_SIMILAR_SUCCESS,
  LOAD_TV_FAILURE,
  LOAD_TV_REQUEST,
  LOAD_TV_SUCCESS,
  SEARCH_FAILURE,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
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

// Detail Content
const loadDetailMovieAPI = (id) => {
  return movieApi.movieDetail(id);
};

const loadDetailTVAPI = (id) => {
  return tvApi.tvDetail(id);
};

function* loadDetail(action) {
  try {
    const { id, isMovie } = action.data;
    if (isMovie) {
      const { data } = yield call(loadDetailMovieAPI, id);
      yield put({
        type: LOAD_DETAIL_SUCCESS,
        payload: data,
      });
    } else {
      const { data } = yield call(loadDetailTVAPI, id);
      yield put({
        type: LOAD_DETAIL_SUCCESS,
        payload: data,
      });
    }
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_DETAIL_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadDetail() {
  yield takeEvery(LOAD_DETAIL_REQUEST, loadDetail);
}

// Similar Content
const loadSimilarMovieAPI = (id) => {
  return movieApi.movieSimilar(id);
};

const loadSimilarTVAPI = (id) => {
  return tvApi.tvSimilar(id);
};

function* loadSimilar(action) {
  try {
    const { id, isMovie } = action.data;
    if (isMovie) {
      const {
        data: { results },
      } = yield call(loadSimilarMovieAPI, id);
      yield put({
        type: LOAD_SIMILAR_SUCCESS,
        payload: results,
      });
    } else {
      const {
        data: { results },
      } = yield call(loadSimilarTVAPI, id);
      yield put({
        type: LOAD_SIMILAR_SUCCESS,
        payload: results,
      });
    }
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SIMILAR_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadSimilar() {
  yield takeEvery(LOAD_SIMILAR_REQUEST, loadSimilar);
}

// Sesaon Content
const loadSeasonAPI = ({ id, seasonNumber }) => {
  return tvApi.tvSeasons(id, seasonNumber);
};

function* loadSeason(action) {
  try {
    const { data } = yield call(loadSeasonAPI, action.data);
    yield put({
      type: LOAD_SEASON_SUCCESS,
      payload: data,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_SEASON_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadSeason() {
  yield takeEvery(LOAD_SEASON_REQUEST, loadSeason);
}

// Genre Content
const loadGenreMovieAPI = (id) => {
  return movieApi.movieDiscover(id, 1);
};
const loadGenreTVAPI = (id) => {
  return tvApi.tvDiscover(id, 1);
};

function* loadGenre(action) {
  try {
    const { id, isMovie } = action.data;
    if (isMovie) {
      const {
        data: { results },
      } = yield call(loadGenreMovieAPI, id);
      yield put({
        type: LOAD_GENRE_SUCCESS,
        payload: results,
      });
    } else {
      const {
        data: { results },
      } = yield call(loadGenreTVAPI, id);
      yield put({
        type: LOAD_GENRE_SUCCESS,
        payload: results,
      });
    }
  } catch (err) {
    console.error(err);
    yield put({
      type: LOAD_GENRE_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLoadGenre() {
  yield takeEvery(LOAD_GENRE_REQUEST, loadGenre);
}

// Search Content
const searchAPI = (term) => {
  return multiApi.search(term);
};

function* search(action) {
  try {
    const {
      data: { results },
    } = yield call(searchAPI, action.data);

    yield put({
      type: SEARCH_SUCCESS,
      payload: results,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SEARCH_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSearch() {
  yield takeEvery(SEARCH_REQUEST, search);
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
    fork(watchLoadDetail),
    fork(watchLoadSimilar),
    fork(watchLoadSeason),
    fork(watchLoadGenre),
    fork(watchSearch),
    fork(watchGetRandom),
  ]);
}
