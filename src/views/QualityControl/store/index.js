// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "qualityControls/getAllData",
  async () => {
    const response = await Api.get("quality-control");
    return response.data;
  }
);

export const getListData = createAsyncThunk(
  "qualityControls/getListData",
  async (station_id) => {
    const response = await Api.get("quality-control-list", {
      params: { station_id: station_id },
    });
    return response.data;
  }
);

export const getOrderData = createAsyncThunk(
  "qualityControls/getOrderData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.get("quality-control-order", {
      params: { station_id: searchParams?.station_id },
    });
    return response.data;
  }
);

export const qualityControlsSlice = createSlice({
  name: "qualityControls",
  initialState: {
    data: {},
    listData: [],
    orderData: [],

    params: {},

    searchParams: {
      batch_number: "",
      user_barcode: "",
      station_id: null,
    },

    allData: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getListData.fulfilled, (state, action) => {
        state.listData = action.payload;
      })
      .addCase(getOrderData.fulfilled, (state, action) => {
        state.orderData = action.payload;
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

export const { setParams, setSearchParams } = qualityControlsSlice.actions;
export default qualityControlsSlice.reducer;
