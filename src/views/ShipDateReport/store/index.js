// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "ShipDateReport/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.shipDateReports;
    const response = await Api.get("ship-date-reports", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getStoreOptions = createAsyncThunk(
  "ShipDateReport/getStoreOptions",
  async () => {
    const response = await Api.get(`report-store-options`);
    return response.data;
  }
);


export const ShipDateReportSlice = createSlice({
  name: "ShipDateReport",
  initialState: { 
    data: [],

    params: {
      page: 1,
    },

    searchParams: {
      start_date: new Date(),
      end_date: new Date(),
    },

    allData: [],

    storeOptions: [],
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

export const { setParams, setSearchParams } = ShipDateReportSlice.actions;
export default ShipDateReportSlice.reducer;
