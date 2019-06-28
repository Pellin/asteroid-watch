import { combineReducers } from 'redux';

import currentReducer from './currentReducer';
import sentriesReducer from './sentriesReducer';
import asteroidReducer from './asteroidReducer';
import filtersReducer from './filtersReducer';

export default combineReducers({
  current: currentReducer,
  sentries: sentriesReducer,
  currentAsteroid: asteroidReducer,
  filters: filtersReducer
});