// Acción para agregar un elemento a favoritos
export const addToFavorites = (id) => ({
  type: 'ADD_TO_FAVORITES',
  payload: id,
});

// Acción para eliminar un elemento de favoritos
export const removeFromFavorites = (id) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: id,
});

// Acción para eliminar todos los favoritos
export const removeAllFavorites = () => ({
  type: 'REMOVE_ALL_FAVORITES',
});

// Acción para ordenar las tarjetas
export const orderCards = (order) => ({
  type: 'ORDER',
  payload: order,
});

// Acción para filtrar las tarjetas por género
export const filterCards = (gender) => ({
  type: 'SET_GENDER_FILTER',
  payload: gender,
});
