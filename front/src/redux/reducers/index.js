import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import contentsReducer from './contentsReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  contents: contentsReducer,
});

export default rootReducer;
