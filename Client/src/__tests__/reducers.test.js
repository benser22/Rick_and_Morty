// reducers.test.js
import reducer from "../redux/reducers/reducers";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  REMOVE_ALL_FAVORITES,
} from "../redux/actions/actions";

describe("Reducers", () => {
  it("should handle ADD_FAV", () => {
    const initialState = {
      favorites: [],
      allCharacters: [],
      order: "A",
      filter: "",
    };
    const characterData = { id: 1, name: "Rick Sanchez" };
    const action = { type: ADD_FAV, payload: characterData };

    const newState = reducer(initialState, action);

    expect(newState.favorites).toEqual(characterData);
    expect(newState.allCharacters).toEqual(characterData);
  });

  
});
