import { combineReducers } from 'redux';
import units from './units'

// combine all reducer to rootReducer
const appReducer = combineReducers({
  units,
});

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

export default rootReducer;
