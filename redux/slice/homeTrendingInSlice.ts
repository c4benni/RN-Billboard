import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchHomeTrendingIn from "../../services/homeTrendingIn";

import { HomeTopGlobal } from "../../types/homeScreen";
import { HomeTrendingIn } from "../../types/redux";
import { fetchBuilder, resultFetcher } from "../utils";

const initialState: HomeTrendingIn = {
  loading: false,
  error: false,
  result: [],
};

export const fetchResult = createAsyncThunk<{ result?: HomeTopGlobal[] }>(
  "fetchHomeTrendingIn",
  async () =>
    await resultFetcher(
      fetchHomeTrendingIn,
      "error fetching fetchHomeTrendingIn"
    )
);

const homeTrendingInSlice = createSlice({
  name: "homeTrendingIn",
  initialState,
  reducers: {},
  extraReducers: (builder) => fetchBuilder(builder, fetchResult as any),
});

export default homeTrendingInSlice.reducer;
