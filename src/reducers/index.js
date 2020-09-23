import { combineReducers } from 'redux';
import userInfo from './userInfo';
import login from './loginStatus';

const reducers = combineReducers({
  userInfo,
  login
});

export default reducers;
