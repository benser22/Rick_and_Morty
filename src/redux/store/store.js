import { createStore, combineReducers } from 'redux';
import favoritesReducer from '../reducers/favoritesReducer';

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  // Otros reducers aquí si los tienes
});

const store = createStore(rootReducer);

export default store;
