import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from '../type';

const initialState = {
  isLoading: false,
  userInfo: null,
  userError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        userError: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        userInfo: action.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        userError: action.error,
      };
    default:
      return state;
  }
};

export default authReducer;
