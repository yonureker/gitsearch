import { combineReducers } from 'redux';
import searchOptionReducer from './searchOptionReducer';
import searchQueryReducer from './searchQueryReducer';
import darkModeReducer from './darkModeReducer'

const rootReducer = combineReducers({
  query: searchQueryReducer,
  searchOption: searchOptionReducer,
  darkMode: darkModeReducer
});

export default rootReducer;