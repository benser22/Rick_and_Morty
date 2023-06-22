// favoritesReducer.js
import { getFavoritesFromStorage, saveFavoritesToStorage } from '../store/favoritesStorage';

const initialState = {
  favorites: getFavoritesFromStorage(),
};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITES':
      const newFavoritesAdd = [...state.favorites, action.payload];
      saveFavoritesToStorage(newFavoritesAdd);
      return {
        ...state,
        favorites: newFavoritesAdd,
      };
    case 'REMOVE_FROM_FAVORITES':
      const newFavoritesRemove = state.favorites.filter((id) => id !== action.payload);
      saveFavoritesToStorage(newFavoritesRemove);
      return {
        ...state,
        favorites: newFavoritesRemove,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
