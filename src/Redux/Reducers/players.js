const initialState = {
  itemsPlayer: [],
  isLoaded: false,
};

const playerInfoReducer = (state = initialState, action) => {
  if (action.type === "ADD_LIST_PLAYER") {
    return {
      ...state,
      itemsPlayer: action.payload,
      isLoaded: true,
    };
  }
  return state;
};

export default playerInfoReducer;
