import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationSlice from "./NavigationSlice";
import backgroundSlice from "./BackgroundSlice";
import boardSlice from "./BoardSlice";

const reducer = combineReducers({
  navigation: navigationSlice,
  background: backgroundSlice,
  board: boardSlice,
});

const store = configureStore({
  reducer,
});

export default store;
