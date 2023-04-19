// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const AddOrder = createAsyncThunk(
  "ManualOrder/AddOrder",
  async (data) => {
    const response = await Api.post("orders", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getStoreOptions = createAsyncThunk(
  "ManualOrder/getStoreOptions",
  async () => {
    const response = await Api.get(`order-store-options`);
    return response.data;
  }
);
export const getShipOptions = createAsyncThunk(
  "ManualOrder/getShipOptions",
  async () => {
    const response = await Api.get(`order-ship-options`);
    return response.data;
  }
);
export const getProductOptions = createAsyncThunk(
  "ManualOrder/getProductOptions",
  async (query) => {
    const response = await Api.post("order-product-options", { query });
    return response.data;
  }
);

export const ManualOrdersSlice = createSlice({
  name: "ManualOrders",
  initialState: {
    storeOptions: [],
    shipOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
      .addCase(getShipOptions.fulfilled, (state, action) => {
        state.shipOptions = action.payload;
      });
  },
});
export default ManualOrdersSlice.reducer;
