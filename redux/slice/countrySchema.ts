import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import fetchCountrySchema from "../../services/fetchCountrySchema";

import { Countries } from "../../types/homeScreen";
import { CountrySchemaState } from "../../types/redux";
import { fetchBuilder, resultFetcher } from "../utils";

const initialState: CountrySchemaState = {
  loading: false,
  result: {},
  error: false,
};

export const fetchResult = createAsyncThunk<{ result?: Countries }>(
  "fetchCountriesSchema",
  async () => {
    const result: Countries = countrySchemaSlice.getInitialState().result;

    if (result.length) {
      return {
        result,
      };
    }

    return await resultFetcher(
      fetchCountrySchema,
      "Error fetching countrySchema"
    );
  }
);

const countrySchemaSlice = createSlice({
  name: "countrySchema",
  initialState,
  reducers: {},
  extraReducers: (builder) => fetchBuilder(builder, fetchResult as any),
});

export default countrySchemaSlice.reducer;
