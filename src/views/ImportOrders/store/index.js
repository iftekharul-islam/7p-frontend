import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../http";

export const importOrdersFile = createAsyncThunk("Import/importOrdersFile", async (data) => {
  const response = await Api.post(`import-orders-file`, data);
  return response.data;
});

export const importTrackingFile = createAsyncThunk("Import/importTrackingFile", async (data) => {
  const response = await Api.post(`import-trcking-file`, data);
  return response.data;
});

export const importZakekeFile = createAsyncThunk("Import/importZakekeFile", async (data) => {
  const response = await Api.post(`import-zakeke-file`, data);
  return response.data;
});

export const getOrderStoreOptions = createAsyncThunk("Import/getOrderStoreOptions", async () => {
  const response = await Api.get(`import-order-store-options`);
  return response.data;
});

export const getTrackingStoreOptions = createAsyncThunk("Import/getTrackingStoreOptions", async () => {
  const response = await Api.get(`import-tracking-store-options`);
  return response.data;
});

export const ImportSlice = createSlice({
  name: "Import",
  initialState: {
    orderStoreOptions: [],
    trackingStoreOptions: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getOrderStoreOptions.fulfilled, (state, action) => {
      state.orderStoreOptions = action.payload;
    })  
    .addCase(getTrackingStoreOptions.fulfilled, (state, action) => {
      state.trackingStoreOptions = action.payload;
    })  
  },
});

export default ImportSlice.reducer;
