// Importa las funciones auxiliares de almacenamiento de favoritos
import {
  getFavoritesFromStorage,
  saveFavoritesToStorage,
} from "../store/favoritesStorage";

// Estado inicial del reducer
const initialState = {
  favorites: getFavoritesFromStorage(), // Obtiene los favoritos almacenados desde el almacenamiento
};

// Reducer de favoritos
const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_FAVORITES":
      // Agrega el nuevo elemento a la lista de favoritos
      const newFavoritesAdd = [...state.favorites, action.payload];
      saveFavoritesToStorage(newFavoritesAdd); // Guarda los favoritos actualizados en el almacenamiento
      return {
        ...state,
        favorites: newFavoritesAdd,
      };
    case "REMOVE_FROM_FAVORITES":
      // Remueve el elemento de la lista de favoritos
      const newFavoritesRemove = state.favorites.filter(
        (id) => id !== action.payload
      );
      saveFavoritesToStorage(newFavoritesRemove); // Guarda los favoritos actualizados en el almacenamiento
      return {
        ...state,
        favorites: newFavoritesRemove,
      };
      // Remueve todos los favoritos
    case "REMOVE_ALL_FAVORITES":
      const voidFavorites = [];
      saveFavoritesToStorage(voidFavorites); // Guarda los favoritos actualizados en el almacenamiento
      return {
        ...state,
        favorites: voidFavorites,
      };
    default:
      return state;
  }
};

export default favoritesReducer;
