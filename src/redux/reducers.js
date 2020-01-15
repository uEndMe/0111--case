import { combineReducers } from 'redux';
import { SAVE_USER, REMOVE_USER } from './action-types';
import { getItem } from '../utils/storage';


const initUser = getItem('user') || {};
function user(prevState = initUser, action) {
  switch (action.type) {
    case SAVE_USER:
      return action.data;
    case REMOVE_USER:
      return {};
    default:
      return prevState;
  }
}

function bbb(prevState = 222, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}
export default combineReducers({
  user,
  bbb,
});