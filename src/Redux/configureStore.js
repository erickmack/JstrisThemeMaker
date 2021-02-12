import { configureStore, combineReducers } from "@reduxjs/toolkit";

import navigationSlice from "./NavigationSlice";
import backgroundSlice from "./BackgroundSlice";

const reducer = combineReducers({
  navigation: navigationSlice,
  background: backgroundSlice,
});

const store = configureStore({
  reducer,
});

export default store;
