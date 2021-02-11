import { configureStore, combineReducers } from "@reduxjs/toolkit";
import navigationSlice from "./NavigationSlice";

const reducer = combineReducers({
  counter: navigationSlice,
});

const store = configureStore({
  reducer,
});

export default store;
