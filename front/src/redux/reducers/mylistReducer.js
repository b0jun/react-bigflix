import {
  ADD_MYLIST_FAILURE,
  ADD_MYLIST_REQUEST,
  ADD_MYLIST_SUCCESS,
  CHECK_MYLIST_FAILURE,
  CHECK_MYLIST_REQUEST,
  CHECK_MYLIST_SUCCESS,
  LOAD_MYLIST_FAILURE,
  LOAD_MYLIST_REQUEST,
  LOAD_MYLIST_SUCCESS,
  REMOVE_MYLIST_FAILURE,
  REMOVE_MYLIST_REQUEST,
  REMOVE_MYLIST_SUCCESS,
} from '../type';

const initialState = {
  isLoading: false,
  saved: false,
  mylistLoading: false,
  mylistResults: null,
};

export const checkMylist = (data) => ({
  type: CHECK_MYLIST_REQUEST,
  data,
});

export const addMylist = (data) => ({
  type: ADD_MYLIST_REQUEST,
  data,
});

export const removeMylist = (data) => ({
  type: REMOVE_MYLIST_REQUEST,
  data,
});

const mylistReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_MYLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case CHECK_MYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        saved: action.payload.saved,
      };
    case CHECK_MYLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case ADD_MYLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case ADD_MYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        saved: true,
      };
    case ADD_MYLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case REMOVE_MYLIST_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case REMOVE_MYLIST_SUCCESS:
      return {
        ...state,
        isLoading: false,
        saved: false,
      };
    case REMOVE_MYLIST_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    case LOAD_MYLIST_REQUEST:
      return {
        ...state,
        mylistLoading: true,
      };
    case LOAD_MYLIST_SUCCESS:
      return {
        ...state,
        mylistLoading: false,
        mylistResults: action.payload,
      };
    case LOAD_MYLIST_FAILURE:
      return {
        ...state,
        mylistLoading: false,
      };
    default:
      return state;
  }
};

export default mylistReducer;
