import {createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers';
import {persistStore, persistReducer} from 'redux-persist';
import thunk from 'redux-thunk';
// import storage from 'redux-persist/lib/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import logger from 'redux-logger';

const persistConfig = {
  key: 'root',
  storage:AsyncStorage,
};
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;
const persistedReducer = persistReducer(persistConfig, reducer);
const middlewareList = [thunk, logger];

const enhancer = composeEnhancers(
  applyMiddleware(...middlewareList),
  // other store enhancers if any
);

export default () => {
  let store = createStore(persistedReducer, enhancer);
  let persistor = persistStore(store);
  return {store, persistor};
};
