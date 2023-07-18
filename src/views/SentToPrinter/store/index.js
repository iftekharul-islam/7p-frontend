// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "sentToPrinter/getAllData",
  async (data, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await Api.get("sent-to-printer", { params: data });
    dispatch(setLoading(false));
    return response.data;
  }
);

export const reprintGraphic = createAsyncThunk(
  "sentToPrinter/reprintGraphic",
  async (data) => {
    const response = await Api.post("reprint_graphic", data);
    return response.data;
  }
);

export const getPrinterOptions = createAsyncThunk(
  "sentToPrinter/getPrinterOptions",
  async () => {
    const response = await Api.get("printer-options");
    return response.data;
  }
);

export const sentToPrinterSlice = createSlice({
  name: "sentToPrinter",
  initialState: {
    data: [],
    total: 1,

    loading: false,

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
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = sentToPrinterSlice.actions;

export default sentToPrinterSlice.reducer;
