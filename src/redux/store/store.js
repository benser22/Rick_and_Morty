import { createStore, combineReducers } from 'redux';
import favoritesReducer from '../reducers/favoritesReducer';
import orderReducer from '../reducers/orderReducer';
import filterReducer from '../reducers/filterReducer';

// Combinación de los reducers en un rootReducer
const rootReducer = combineReducers({
  favorites: favoritesReducer, // Reducer para gestionar los favoritos
  order: orderReducer, // Reducer para gestionar el orden
  filter: filterReducer, // Reducer para gestionar el filtro
});

// Creación de la store con el rootReducer
const store = createStore(rootReducer);

export default store;
