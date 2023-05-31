// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "sentToPrinter/getAllData",
  async (data) => {
    const response = await Api.get("sent-to-printer", { params: data });
    return response.data;
  }
);

export const getPrinterOptions = createAsyncThunk(
  "sentToPrinter/getPrinterOptions",
  async (data) => {
    const response = await Api.get("printer-options");
    return response.data;
  }
);

export const sentToPrinterSlice = createSlice({
  name: "sentToPrinter",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    printerOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getPrinterOptions.fulfilled, (state, action) => {
        state.printerOptions = action.payload;
      });
  },
});

export default sentToPrinterSlice.reducer;
