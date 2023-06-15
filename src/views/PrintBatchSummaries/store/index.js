// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "printBatchSummaries/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.printBatchSummaries;
    const response = await Api.get("print-batch-summaries", {
      params: searchParams,
    });
    return response.data;
  }
);

// getPrintData
export const getPrintData = createAsyncThunk(
  "printBatchSummaries/getPrintData",
  async (params) => {
    const response = await Api.post("batch-print", params);
    if (response?.staus == 200) {
      return { status: 200, data: response.data };
    }
  }
);

export const printBatchSummariesSlice = createSlice({
  name: "printBatchSummaries",
  initialState: {
    data: [],

    params: {},
    searchParams: {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
      state.storeOptions = action.payload?.stores;
    });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
  },
});

export const { setParams, setSearchParams } = printBatchSummariesSlice.actions;
export default printBatchSummariesSlice.reducer;
