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
  CLEAR_ERROR,
  TEMP_SET_USER,
} from '../type';

const initialState = {
  isLoading: false,
  userInfo: null,
  userError: null,
};

export const clearError = () => ({
  type: CLEAR_ERROR,
});

// 새로 고침 시 localStorage을 불러 임시 로그인 유지
export const tempSetUser = (userInfo) => ({
  type: TEMP_SET_USER,
  userInfo,
});

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case TEMP_SET_USER:
      return {
        ...state,
        userInfo: JSON.parse(action.userInfo),
      };
    case LOGIN_REQUEST:
    case REGISTER_REQUEST:
      return {
        ...state,
        isLoading: true,
        userError: null,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      console.log('132123', action.payload);
      localStorage.setItem('user', JSON.stringify(action.payload));
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
      };
    case LOGIN_FAILURE:
    case REGISTER_FAILURE:
      localStorage.removeItem('user');
      return {
        ...state,
        isLoading: false,
        userError: action.error,
      };
    case USER_LOADING_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.payload,
      };
    case USER_LOADING_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case LOGOUT_SUCCESS:
      localStorage.removeItem('user');
      return {
        ...state,
        isLoading: false,
        userInfo: null,
      };
    case LOGOUT_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case CLEAR_ERROR:
      return {
        ...state,
        userError: null,
      };
    default:
      return state;
  }
};

export default authReducer;
