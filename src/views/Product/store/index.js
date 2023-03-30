// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Product/getAllData",
  async (data) => {
    const response = await Api.get("purchased-products", { params: data });
    return response.data;
  }
);

export const getProduct = createAsyncThunk(
  "Product/getProduct",
  async (id) => {
    const response = await Api.get(`purchased-products/${id}`);
    return response.data;
  }
);

export const AddProduct = createAsyncThunk(
  "Product/AddProduct",
  async (data, { dispatch }) => {
    const response = await Api.post("purchased-products", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateProduct = createAsyncThunk(
  "Product/UpdateProduct",
  async (data, { dispatch }) => {
    const response = await Api.post(`purchased-products/${data?.id}`, data?.data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "Product/DeleteProduct",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-purchased-products/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const AddStock = createAsyncThunk("Product/AddStock", async (data) => {
  const response = await Api.post("add-stock-products", data);
  if (response?.status == 201) {
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

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

    product:{},

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
    unitOptions: [
      {
        label: "Each",
        value: "Each",
      },
      {
        label: "Case",
        value: 'Case',
      },
      {
        label: "Pack",
        value: "Pack",
      },
      {
        label: "Square Foot",
        value: "Square Foot",
      }
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
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
