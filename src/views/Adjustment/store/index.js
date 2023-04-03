// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getViewAdjustmentData = createAsyncThunk(
  "Adjustment/getViewAdjustmentData",
  async (data) => {
    const response = await Api.get("view-adjustments", { params: data });
    return response.data;
  }
);

export const getAdjustInventoryData = createAsyncThunk(
  "Adjustment/getAdjustInventoryData",
  async (data) => {
    const response = await Api.get("adjust-inventory", { params: data });
    return response.data;
  }
);

export const getProductionRejectsData = createAsyncThunk(
  "Adjustment/getProductionRejectsData",
  async (data) => {
    const response = await Api.get("production-rejects", { params: data });
    return response.data;
  }
);

export const updateAdjustInventoryData = createAsyncThunk(
  "Adjustment/updateAdjustInventoryData",
  async (data) => {
    const response = await Api.post("update-adjust-inventory", data);
    return response.data;
  }
);


export const AdjustmentSlice = createSlice({
  name: "Product",
  initialState: {
    viewAdjustmentData: [],
    view_total: 1,

    AdjustInventory: null,
    // AdjustInventoryData: [],
    // adjust_inventory_total: 1,

    ProductionRejectsData: [],

    active: "1",
    params: {},
    allData: [],

    product:{},

  },
  extraReducers: (builder) => {
    builder
      .addCase(getViewAdjustmentData.fulfilled, (state, action) => {
        state.viewAdjustmentData = action.payload?.data;
        state.view_total = action.payload?.total;
      })
      .addCase(getAdjustInventoryData.fulfilled, (state, action) => {
        state.AdjustInventory = action.payload?.data;
      })
      .addCase(getProductionRejectsData.fulfilled, (state, action) => {
        state.ProductionRejectsData = action.payload?.data;
      })
  },
  reducers: {
    setActive:(state, action) => {
      state.active = action.payload;
    }
  }
});
export const { setActive } = AdjustmentSlice.actions;
export default AdjustmentSlice.reducer;
