import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  REMOVE_ALL_FAVORITES,
} from "../actions/actions";

const initialState = {
  favorites: [],
  allCharacters: [],
  order: "A",
  filter: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAV:
      const addFavorites = [...state.allCharacters, payload];
      return {
        ...state,
        favorites: [...addFavorites],
        allCharacters: [...addFavorites],
      };
    case REMOVE_FAV:
      const deleteFavorites = state.favorites.filter((e) => e.id !== payload);

      return {
        ...state,
        favorites: [...deleteFavorites],
        allCharacters: [...deleteFavorites],
      };
    case FILTER:
      return {
        ...state,
        filter: payload,
      };
    case ORDER:
      let orderFavorites;
      if (payload === "A") {
        orderFavorites = [...state.favorites].sort((a, b) => a.id - b.id);
      } else {
        orderFavorites = [...state.favorites].sort((a, b) => b.id - a.id);
      }
      return {
        ...state,
        favorites: [...orderFavorites],
        order: payload,
      };

    case REMOVE_ALL_FAVORITES:
      return {
        ...state,
        favorites: [],
        allCharacters: [],
      };
    default:
      return state;
  }
};

export default reducer;
