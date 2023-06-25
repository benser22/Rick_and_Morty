const initialState = {
  order: "A", // Valor inicial para el ordenamiento ascendente
};

const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER":
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
