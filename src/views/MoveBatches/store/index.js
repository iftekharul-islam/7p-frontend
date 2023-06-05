// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "moveBatches/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.moveBatches;
    const response = await Api.get("move-batches", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);


export const getStationOptions = createAsyncThunk(
  "batchList/getStationOptions",
  async () => {
    const response = await Api.get("custom-station-options");
    return response.data;
  }
);

export const moveBatchesSlice = createSlice({
  name: "moveBatches",
  initialState: {
    data: [],
    total: 1,
    cost: null,

    params: {
      page: 1,
    },

    searchParams: {
      route: null,
      station: null,
      start_date: null,
      end_date: null,
      filter_username: null,
      batch: null,
      status: null,
      store: [],
      order_start_date: null,
      order_end_date: null,
    },

    allData: [],

    next_in_routeOptions: [],
    stationOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload
      })
      .addCase(getStationOptions.fulfilled, (state, action) => {
        state.stationOptions = action.payload;
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

export const { setParams, setSearchParams } = moveBatchesSlice.actions;
export default moveBatchesSlice.reducer;
