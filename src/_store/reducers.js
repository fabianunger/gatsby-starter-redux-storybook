import { combineReducers } from 'redux';

import count from './state_count/countReducer';

export default combineReducers({
  count,
});
