import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationSlice from "./NavigationSlice";
import backgroundSlice from "./BackgroundSlice";
import boardSlice from "./BoardSlice";
import buttonSlice from "./ButtonsSlice";
import statsSlice from "./StatsSlice";
import chatSlice from "./ChatSlice";

const reducer = combineReducers({
  navigation: navigationSlice,
  background: backgroundSlice,
  board: boardSlice,
  button: buttonSlice,
  stats: statsSlice,
  chat: chatSlice,
});

const store = configureStore({
  reducer,
});

export default store;
