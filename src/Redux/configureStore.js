import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationSlice from "./NavigationSlice";
import backgroundSlice from "./BackgroundSlice";
import boardSlice from "./BoardSlice";
import buttonSlice from './ButtonsSlice'

const reducer = combineReducers({
  navigation: navigationSlice,
  background: backgroundSlice,
  board: boardSlice,
  button: buttonSlice,
});

const store = configureStore({
  reducer,
});

export default store;
