import { createStore, combineReducers } from "redux";
import serviceListReducer from "../reducers/list";
import serviceAddReducer from "../reducers/add";

const reducer = combineReducers({
  serviceList: serviceListReducer,
  serviceAdd: serviceAddReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
