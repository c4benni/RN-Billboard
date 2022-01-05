import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import useListSlice from "./useListSlice";

const rootReducer = combineReducers({
    userList:useListSlice
});

export type RootState = ReturnType<typeof rootReducer>

const store = configureStore({
    reducer: rootReducer
})

export default store