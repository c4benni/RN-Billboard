import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchHomeTopGlobal from "../../services/homeTopGlobal";

import { HomeTopGlobal } from "../../types/homeScreen";
import { TopGlobalState } from "../../types/redux";
import { fetchBuilder, resultFetcher } from "../utils";

const initialState: TopGlobalState = {
  loading: false,
  error: false,
  result: [],
};

export const fetchResult = createAsyncThunk<{ result?: HomeTopGlobal[] }>(
  "fetchHomeTopGlobal",
  async () =>
    await resultFetcher(fetchHomeTopGlobal, "Error fetching homeTopGlobal")
);

const topGlobalSlice = createSlice({
  name: "homeTopGlobal",
  initialState,
  reducers: {},
  extraReducers: (builder) => fetchBuilder(builder, fetchResult as any),
});

export default topGlobalSlice.reducer;
