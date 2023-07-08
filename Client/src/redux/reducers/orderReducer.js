// Estado inicial del reducer
const initialState = {
  order: "A", // Orden inicial establecido como "A"
};

// Reducer de orden
const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDER":
      // Establece el orden con el valor proporcionado en la acción
      return {
        ...state,
        order: action.payload,
      };
    default:
      return state;
  }
};

export default orderReducer;
