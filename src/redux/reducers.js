import { combineReducers } from 'redux';

function aaa(prevState = 111, action) {
  switch (action.type) {
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
  aaa,
  bbb,
});