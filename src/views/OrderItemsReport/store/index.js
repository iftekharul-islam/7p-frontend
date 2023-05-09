// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "OderItemsReport/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.orderItemsReports;
    const response = await Api.get("order-items-reports", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getStoreOptions = createAsyncThunk(
  "OderItemsReport/getStoreOptions",
  async () => {
    const response = await Api.get(`report-store-options`);
    return response.data;
  }
);


export const OderItemsReportSlice = createSlice({
  name: "OderItemsReport",
  initialState: { 
    data: [],

    params: {
      page: 1,
    },

    searchParams: {
      limit: '10',
      start_date: new Date(),
      end_date: new Date(),
    },

    allData: [],

    storeOptions: [],
    resultOptions: [
      { label: "Results", value: "" },
      { label: "10", value: "10" },
      { label: "25", value: "25" },
      { label: "50", value: "50" },
      { label: "100", value: "100" },
      { label: "250", value: "250" },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
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

export const { setParams, setSearchParams } = OderItemsReportSlice.actions;
export default OderItemsReportSlice.reducer;
