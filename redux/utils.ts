import { ActionReducerMapBuilder, AsyncThunk } from "@reduxjs/toolkit";

export const fetchBuilder = (
  builder: ActionReducerMapBuilder<any>,
  asyncThunk: AsyncThunk<{ result: any }, void, {}>
) =>
  builder
    .addCase(asyncThunk.pending, (state) => {
      state.error = false;
      state.loading = true;
    })
    .addCase(asyncThunk.fulfilled, (state, action) => {
      state.error = false;
      state.result = action.payload.result || [];
      state.loading = false;
    })
    .addCase(asyncThunk.rejected, (state) => {
      state.error = true;
      state.loading = false;
    });

export const resultFetcher = async (
  apiCall: Function,
  errorMessage: string
): Promise<{ result?: any }> => {
  const response = await apiCall();

  if (response.kind == "success") {
    return {
      result: response.body,
    };
  } else throw errorMessage;
};
