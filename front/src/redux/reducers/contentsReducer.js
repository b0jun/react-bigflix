import {
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

const initialState = {
  isLoading: false,
  homeResults: {},
  tvResults: {},
  movieResults: {},
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
    default:
      return state;
  }
};

export default contentsReducer;
