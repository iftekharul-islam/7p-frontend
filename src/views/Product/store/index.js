// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Product/getAllData", async (data) => {
  const response = await Api.get("products",{params: data});
  return response.data;
});

export const AddProduct = createAsyncThunk(
  "Product/AddProduct",
  async (data, { dispatch }) => {
    const response = await Api.post("products", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const AddStock = createAsyncThunk(
  "Product/AddStock",
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
  "Product/getAllStocks",
  async (data) => {
    const response = await Api.get("stock-options", data);
    return response.data;
  }
);

export const getAllVendors = createAsyncThunk(
  "Product/getAllVendors",
  async (data) => {
    const response = await Api.get("vendor-options", data);
    return response.data;
  }
);

export const UserSlice = createSlice({
  name: "Product",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    stockOptions: [],
    vendorOptions: [],
    sectionOptions: [
      {
        label: "Section A",
        value: 1,
      },
      {
        label: "Section B",
        value: 2,
      },
      {
        label: "Section C",
        value: 3,
      },
      {
        label: "Section D",
        value: 4,
      },
      {
        label: "Section E",
        value: 5,
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getAllStocks.fulfilled, (state, action) => {
        state.stockOptions = action.payload;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      });
  },
});

export default UserSlice.reducer;
