export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const REMOVE_ALL_FAVORITES = "REMOVE_ALL_FAVORITES";

// Acción para agregar un favorito
export function addFav(personaje) {
  return {
    type: ADD_FAV,
    payload: personaje,
  };
}

// Acción para eliminar un favorito
export function removeFav(id) {
  return {
    type: REMOVE_FAV,
    payload: id,
  };
}

// Acción para eliminar todos los favoritos
export const removeAllFavorites = () => ({
  type: "REMOVE_ALL_FAVORITES",
});

// Acción para ordenar las tarjetas
export const orderCards = (order) => ({
  type: "ORDER",
  payload: order,
});

// Acción para filtrar las tarjetas por género
export const filterCards = (gender) => ({
  type: "FILTER",
  payload: gender,
});
