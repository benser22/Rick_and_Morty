import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const REMOVE_ALL_FAVORITES = "REMOVE_ALL_FAVORITES";

// ACTION | addFav
export const addFav = (character) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav";
  return (dispatch) => {
    axios.post(endpoint, character).then(({ data }) => {
      return dispatch({
        type: "ADD_FAV",
        payload: data,
      });
    });
  };
};

// ACTION | removeFav
export const removeFav = (id) => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/" + id;
  return (dispatch) => {
    axios.delete(endpoint).then(({ data }) => {
      return dispatch({
        type: "REMOVE_FAV",
        payload: data,
      });
    });
  };
};

// Acción para eliminar todos los favoritos
export const removeAllFavorites = () => {
  const endpoint = "http://localhost:3001/rickandmorty/fav/";
  return (dispatch) => {
    axios.delete(endpoint).then(() => {
      dispatch({
        type: REMOVE_ALL_FAVORITES,
      });
    });
  };
};

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
