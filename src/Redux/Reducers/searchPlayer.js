const initialState = {
  playerInfo: [],
  isLoaded: false,
};

const searchPlayerReducer = (state = initialState, action) => {
  if (action.type === "ADD_SEARCH_PLAYER") {
    return {
      ...state,
      playerInfo: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default searchPlayerReducer;
