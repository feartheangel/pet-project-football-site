import { combineReducers } from "redux";
import backEndReducer from "./backend";
import navFilterReducer from "./nav-filter";
import searchPlayerReducer from "./searchPlayer";
import successReducer from "./successAutoriz";
const rootReducers = combineReducers({
  backEnd: backEndReducer,
  navFilter: navFilterReducer,
  searchPlayer: searchPlayerReducer,
  successAutorizated: successReducer,
});

export default rootReducers;
