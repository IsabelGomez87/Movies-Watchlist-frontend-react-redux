import { combineReducers } from 'redux';
import moviesReducer from './moviesReducer';
import isLoadingReducer from './isLoadingReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  isLoading: isLoadingReducer,
});

export default rootReducer;
