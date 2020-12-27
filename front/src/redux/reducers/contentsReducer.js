import {
  GET_RANDOM_REQUEST,
  GET_RANDOM_SUCCESS,
  GET_RANDOM_FAILURE,
  LOAD_HOME_REQUEST,
  LOAD_HOME_SUCCESS,
  LOAD_HOME_FAILURE,
  LOAD_MOVIE_REQUEST,
  LOAD_MOVIE_SUCCESS,
  LOAD_MOVIE_FAILURE,
  LOAD_TV_REQUEST,
  LOAD_TV_SUCCESS,
  LOAD_TV_FAILURE,
  LOAD_DETAIL_REQUEST,
  LOAD_DETAIL_SUCCESS,
  LOAD_DETAIL_FAILURE,
  CLEAR_DETAIL,
} from '../type';

const initialState = {
  isLoading: false,
  homeResults: {},
  tvResults: {},
  movieResults: {},
  randomResults: {},
  getRandomLoading: false,
  detailResult: null,
  detailLoading: false,
  contentsError: null,
};

const contentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_HOME_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_HOME_SUCCESS:
      const {
        airingTodayTV,
        popularMovie,
        popularTV,
        topRatedMovie,
        topRatedTV,
      } = action.payload;
      return {
        ...state,
        isLoading: false,
        homeResults: {
          ...state.homeResults,
          airingTodayTV,
          popularMovie,
          popularTV,
          topRatedMovie,
          topRatedTV,
        },
      };
    case LOAD_HOME_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_TV_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_TV_SUCCESS:
      const { tvTrendingDay, tvTrendingWeek } = action.payload;
      return {
        ...state,
        isLoading: false,
        tvResults: {
          ...state.tvResults,
          tvTrendingDay,
          tvTrendingWeek,
        },
      };
    case LOAD_TV_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_MOVIE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOAD_MOVIE_SUCCESS:
      const { movieTrendingDay, movieTrendingWeek } = action.payload;
      return {
        ...state,
        isLoading: false,
        movieResults: {
          ...state.movieResults,
          movieTrendingDay,
          movieTrendingWeek,
        },
      };
    case LOAD_MOVIE_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_DETAIL_REQUEST:
      return {
        ...state,
        detailLoading: true,
        detailResult: null,
      };
    case LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        detailLoading: false,
        detailResult: action.payload,
      };
    case LOAD_DETAIL_FAILURE:
      return {
        ...state,
        detailLoading: false,
      };
    case GET_RANDOM_REQUEST:
      return {
        ...state,
        getRandomLoading: true,
      };
    case GET_RANDOM_SUCCESS:
      return {
        ...state,
        getRandomLoading: false,
        randomResults: {
          ...state.randomResult,
          popularMovie: action.payload.popularMovie,
          tvTrendingWeek: action.payload.tvTrendingWeek,
          movieTrendingWeek: action.payload.movieTrendingWeek,
        },
      };
    case GET_RANDOM_FAILURE:
      return {
        ...state,
        getRandomLoading: false,
      };

    case CLEAR_DETAIL:
      return {
        ...state,
        detailResult: null,
      };
    default:
      return state;
  }
};

export default contentsReducer;
