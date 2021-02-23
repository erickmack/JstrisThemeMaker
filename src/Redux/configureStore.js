import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationSlice from "./NavigationSlice";
import backgroundSlice from "./BackgroundSlice";
import boardSlice from "./BoardSlice";
import buttonSlice from "./ButtonsSlice";
import statsSlice from "./StatsSlice";

const reducer = combineReducers({
  navigation: navigationSlice,
  background: backgroundSlice,
  board: boardSlice,
  button: buttonSlice,
  stats: statsSlice,
});

const store = configureStore({
  reducer,
});

export default store;
