import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import countrySchemaSlice from "./slice/countrySchema";
import homeTopGlobalSlice from "./slice/homeTopGlobalSlice";
import homeTrendingInSlice from "./slice/homeTrendingInSlice";

const rootReducer = combineReducers({
  countrySchema: countrySchemaSlice,
  homeTopGlobal: homeTopGlobalSlice,
  homeTrendingIn: homeTrendingInSlice,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({ reducer: rootReducer });

export default store;
