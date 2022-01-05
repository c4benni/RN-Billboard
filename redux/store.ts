import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countrySchema from "./slice/countrySchema";
import homeTopGlobalSlice from "./slice/homeTopGlobalSlice";
import homeTrendingIn from "./slice/homeTrendingInSlice";

const rootReducer = combineReducers({
  countrySchema: countrySchema,
  homeTopGlobal: homeTopGlobalSlice,
  homeTrendingIn,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
