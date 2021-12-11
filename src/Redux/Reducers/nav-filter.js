const initialState = {
  items: "",
};

const navFilter = (state = initialState, action) => {
  if (action.type === "ADD_NAV_STRING") {
    return {
      ...state,
      items: action.payload,
    };
  }
  return state;
};

export default navFilter;
