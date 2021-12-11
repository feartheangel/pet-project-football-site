const initialState = {
  dataFile: [],
  isLoaded: false,
};

const backEnd = (state = initialState, action) => {
  if (action.type === "ADD_BACK_END") {
    return {
      ...state,
      dataFile: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default backEnd;
