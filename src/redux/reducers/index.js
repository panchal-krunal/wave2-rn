import {combineReducers} from 'redux';
import authReducer from './auth';
import watchlistReducer from './watchlist';

const rootReducer = combineReducers({
  authReducer,
  watchlistReducer,
});

export default rootReducer;
