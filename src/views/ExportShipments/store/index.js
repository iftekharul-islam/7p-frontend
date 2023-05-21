import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../http";

export const getExportData = createAsyncThunk("Export/getExportData", async () => {
  const response = await Api.get(`export-data`);
  return response.data;
});

export const exportQuickbooks = createAsyncThunk("Export/exportqb", async (data) => {
  const response = await Api.post(`export-qb`, data);
  return response.data;
});

export const exportQuickbooksCSV = createAsyncThunk("Export/exportqb", async (data) => {
  const response = await Api.post(`export-qb-csv`, data);
  return response.data;
});

export const getOrderStoreOptions = createAsyncThunk("Export/getOrderStoreOptions", async () => {
  const response = await Api.get(`import-order-store-options`);
  return response.data;
});

export const ExportSlice = createSlice({
  name: "Export",
  initialState: {
    exportData: [],
    orderStoreOptions: [],
    trackingStoreOptions: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getExportData.fulfilled, (state, action) => {
      state.exportData = action.payload?.data;
    })
    .addCase(getOrderStoreOptions.fulfilled, (state, action) => {
      state.orderStoreOptions = action.payload;
    })   
  },
});

export default ExportSlice.reducer;
