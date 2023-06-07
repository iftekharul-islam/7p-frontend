// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "mustShipReport/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.mustShipReport;
    const response = await Api.get("must-ship-report", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getStoreOptions = createAsyncThunk(
  "mustShipReport/getStoreOptions",
  async () => {
    const response = await Api.get("item-store-options");
    return response.data;
  }
);

export const getStatusOptions = createAsyncThunk(
  "mustShipReport/getStatusOptions",
  async () => {
    const response = await Api.get("stores-must-ship-options");
    return response.data;
  }
);

export const mustShipReportSlice = createSlice({
  name: "mustShipReport",
  initialState: {
    data: [],

    params: {},

    searchParams: {},

    allData: [],

    storeOptions: [],
    statusOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
      .addCase(getStatusOptions.fulfilled, (state, action) => {
        state.statusOptions = action.payload;
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

export const { setParams, setSearchParams } = mustShipReportSlice.actions;
export default mustShipReportSlice.reducer;
