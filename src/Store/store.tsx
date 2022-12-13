import * as Redux from "redux";
import { getDataReducer } from "./reducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = Redux.combineReducers({
  getDataReducer: getDataReducer,
});
export const Store = Redux.legacy_createStore(
  rootReducer,
  composeWithDevTools(Redux.applyMiddleware(thunk))
);

export type AppDispatch = typeof Store.dispatch;
export type RootState = ReturnType<typeof Store.getState>