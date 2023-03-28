// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Order/getAllData", async (data) => {
  const response = await Api.get("orders", { params: data });
  return response.data;
});

export const getVendor = createAsyncThunk("Order/getVendor", async (id) => {
  const response = await Api.get(`vendors/${id}`);
  return response.data;
});

export const AddVendor = createAsyncThunk(
  "Order/AddVendor",
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
  "Order/UpdateVendor",
  async (data, { dispatch }) => {
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
  "Order/DeleteVendor",
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

export const AddStock = createAsyncThunk("Order/AddStock", async (data) => {
  const response = await Api.post("add-stock-products", data);
  if (response?.status == 201) {
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

export const getAllStocks = createAsyncThunk(
  "Order/getAllStocks",
  async (data) => {
    const response = await Api.get("stock-options", data);
    return response.data;
  }
);

export const getAllVendors = createAsyncThunk(
  "Order/getAllVendors",
  async (data) => {
    const response = await Api.get("vendor-options", data);
    return response.data;
  }
);

export const getAllProductByVendor = createAsyncThunk(
  "Order/getAllProductByVendor",
  async (id) => {
    const response = await Api.get(`product-options/${id}`);
    return response.data;
  }
);

export const OrderSlice = createSlice({
  name: "Order",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    vendor: {},

    vendorOptions: [],
    skuOptions: [],
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
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      })
      .addCase(getAllProductByVendor.fulfilled, (state, action) => {
        state.skuOptions = action.payload;
      });
  },
});

export default OrderSlice.reducer;
