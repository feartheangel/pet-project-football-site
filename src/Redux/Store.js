import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./Reducers";

const store = createStore(
  rootReducers,
  // applyMiddleware(thunk)
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;
