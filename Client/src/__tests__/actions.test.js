// actions.test.js
import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  ADD_FAV,
  REMOVE_FAV,
  FILTER,
  ORDER,
  REMOVE_ALL_FAVORITES,
  addFav,
  removeFav,
  removeAllFavorites,
  orderCards,
  filterCards,
} from "../redux/actions/actions";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

jest.mock("axios");

describe("Actions", () => {
  it("should create ADD_FAV action", async () => {
    const characterData = { id: 1, name: "Morty Smith" };
    axios.post.mockResolvedValueOnce({ data: characterData });

    const expectedActions = [{ type: ADD_FAV, payload: characterData }];
    const store = mockStore({});

    await store.dispatch(addFav(characterData));

    expect(store.getActions()).toEqual(expectedActions);
  });

  // Add more test cases for other actions in actions.js...
});
