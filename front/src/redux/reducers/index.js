import { combineReducers } from 'redux';
import authReducer from './authReducer.js';
import contentsReducer from './contentsReducer.js';
import mylistReducer from './mylistReducer.js';

const rootReducer = combineReducers({
  auth: authReducer,
  contents: contentsReducer,
  mylist: mylistReducer,
});

export default rootReducer;
