// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "qualityControls/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.get("quality-control", {
      params: { ...searchParams },
    });
    return response.data;
  }
);

export const getListData = createAsyncThunk(
  "qualityControls/getListData",
  async (id) => {
    const response = await Api.get("quality-control-list", {
      params: { station_id: id },
    });
    return response.data;
  }
);

export const getOrderData = createAsyncThunk(
  "qualityControls/getOrderData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.post("quality-control-order", {
      batch_number: searchParams?.batch_number,
      user_barcode: searchParams?.user_barcode,
    });
    return response.data;
  }
);

export const qualityControlsSlice = createSlice({
  name: "qualityControls",
  initialState: {
    data: [],
    listData: [],
    orderData: [],

    params: {},

    searchParams: {
      batch_number: null,
      user_barcode: null,
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
