export const addToFavorites = (id) => ({
  type: 'ADD_TO_FAVORITES',
  payload: id,
});

export const removeFromFavorites = (id) => ({
  type: 'REMOVE_FROM_FAVORITES',
  payload: id,
});

export const orderCards = (order) => ({
  type: 'ORDER',
  payload: order,
});

export const filterCards = (gender) => (
  {
  type: 'SET_GENDER_FILTER', 
  payload: gender,
});

