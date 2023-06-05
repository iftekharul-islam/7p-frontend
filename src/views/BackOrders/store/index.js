// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "batchList/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.batchList;
    const response = await Api.get("batch-list", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getRouteOptions = createAsyncThunk(
  "batchList/getRouteOptions",
  async () => {
    const response = await Api.get("batch-route-options");
    return response.data;
  }
);

export const getStationOptions = createAsyncThunk(
  "batchList/getStationOptions",
  async () => {
    const response = await Api.get("advance-station-options");
    return response.data;
  }
);

export const getStatusOptions = createAsyncThunk(
  "batchList/getStatusOptions",
  async () => {
    const response = await Api.get("batch-status-options");
    return response.data;
  }
);

export const getStoreOptions = createAsyncThunk(
  "batchList/getStoreOptions",
  async () => {
    const response = await Api.get("order-store-options");
    return response.data;
  }
);

export const batchListSlice = createSlice({
  name: "batchList",
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

    routeOptions: [],
    stationOptions: [],
    statusOptions: [],
    storeOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.inventories?.data;
        state.cost = action.payload?.total_cost;
        state.total = action.payload?.inventories?.total;
      })
      .addCase(getRouteOptions.fulfilled, (state, action) => {
        state.routeOptions = action.payload;
      })
      .addCase(getStationOptions.fulfilled, (state, action) => {
        state.stationOptions = action.payload;
      })
      .addCase(getStatusOptions.fulfilled, (state, action) => {
        state.statusOptions = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
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

export const { setParams, setSearchParams } = batchListSlice.actions;
export default batchListSlice.reducer;
