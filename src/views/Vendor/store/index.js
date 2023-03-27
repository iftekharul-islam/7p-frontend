// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Vendor/getAllData", async (data) => {
  const response = await Api.get("vendors",{params: data});
  return response.data;
});

export const getVendor = createAsyncThunk("Vendor/getVendor", async (id) => {
  const response = await Api.get(`vendors/${id}`);
  return response.data;
});

export const AddVendor = createAsyncThunk(
  "Vendor/AddVendor",
  async (data, { dispatch }) => {
    const response = await Api.post("vendors", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateVendor = createAsyncThunk(
  "Vendor/UpdateVendor",
  async (data, {dispatch}) => {
    const response = await Api.post(`vendors/${data?.id}`, data?.data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteVendor = createAsyncThunk(
  "Vendor/DeleteVendor",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-vendors/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const AddStock = createAsyncThunk(
  "Vendor/AddStock",
  async (data) => {
    const response = await Api.post("add-stock-products", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllStocks = createAsyncThunk(
  "Vendor/getAllStocks",
  async (data) => {
    const response = await Api.get("stock-options", data);
    return response.data;
  }
);

export const getAllVendors = createAsyncThunk(
  "Vendor/getAllVendors",
  async (data) => {
    const response = await Api.get("vendor-options", data);
    return response.data;
  }
);

export const VendorSlice = createSlice({
  name: "Vendor",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    vendor:{}
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getVendor.fulfilled, (state, action) => {
        state.vendor = action.payload;
      })
      .addCase(getAllStocks.fulfilled, (state, action) => {
        state.stockOptions = action.payload;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      });
  },
});

export default VendorSlice.reducer;
