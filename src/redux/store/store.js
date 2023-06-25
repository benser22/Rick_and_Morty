// store.js
import { createStore, combineReducers } from 'redux';
import favoritesReducer from '../reducers/favoritesReducer';
import orderReducer from '../reducers/orderReducer';
import filterReducer from '../reducers/filterReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  order: orderReducer,
  filter: filterReducer,
  // Otros reducers aquí si los tienes
});

const store = createStore(rootReducer);

export default store;
