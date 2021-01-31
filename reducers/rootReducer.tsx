import { combineReducers } from 'redux';
import searchOptionReducer from './searchOptionReducer';
import searchQueryReducer from './searchQueryReducer';

const rootReducer = combineReducers({
  query: searchQueryReducer,
  searchOption: searchOptionReducer
});

export default rootReducer;