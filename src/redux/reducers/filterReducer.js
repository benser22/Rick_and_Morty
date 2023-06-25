// filterReducer.js
const initialState = {
    genderFilter: '', 
  };
  
  const filterReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_GENDER_FILTER': 
        return {
          ...state,
          genderFilter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterReducer;
  