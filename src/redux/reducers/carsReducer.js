const initialData = {
  cars: [],
};

// Create your reducer function - save the data from the api
export const carsReducer = (state = initialData, action) => {
  switch (action.type) {
    // Add cases for different action types if needed
    case "GET_ALL_CARS": {
      return {
        ...state,
        cars: action.payload,
      };
    }
    default:
      return state;
  }
};
