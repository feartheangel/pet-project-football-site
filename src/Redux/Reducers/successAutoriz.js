const initialState = {
  dataFileAutoriz: false,
  isAutorization: false,
};

const successAutorizReducer = (state = initialState, action) => {
  if (action.type === "ADD_SUCCESS_USER") {
    return {
      ...state,
      dataFileAutoriz: action.payload,
      isAutorization: true,
    };
  }
  return state;
};

export default successAutorizReducer;
