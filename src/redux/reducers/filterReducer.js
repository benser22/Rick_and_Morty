// Estado inicial del reducer
const initialState = {
  genderFilter: '', // Filtro de género inicialmente vacío
};

// Reducer de filtro
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_GENDER_FILTER':
      // Establece el filtro de género con el valor proporcionado en la acción
      return {
        ...state,
        genderFilter: action.payload,
      };
    default:
      return state;
  }
};

export default filterReducer;
