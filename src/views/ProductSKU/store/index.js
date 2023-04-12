// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "ProductSKU/getAllData",
  async (data) => {
    const response = await Api.get("product", { params: data });
    return response.data;
  }
);

export const getProduct = createAsyncThunk(
  "ProductSKU/getProduct",
  async (id) => {
    const response = await Api.get(`product/${id}`);
    return response.data;
  }
);

export const AddProduct = createAsyncThunk(
  "ProductSKU/AddProduct",
  async (data, { dispatch }) => {
    const response = await Api.post("product", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateProduct = createAsyncThunk(
  "ProductSKU/UpdateProduct",
  async (data) => {
    const response = await Api.post(`product/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteProduct = createAsyncThunk(
  "ProductSKU/DeleteProduct",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-product/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getProductionCategoryOptions = createAsyncThunk(
  "ProductSKU/getProductionCategoryOptions",
  async () => {
    const response = await Api.get("production-category-options");
    return response.data;
  }
);

export const getSearchableFieldsOptions = createAsyncThunk(
  "ProductSKU/getSearchableFieldsOptions",
  async () => {
    const response = await Api.get("product-searchable-fields-options");
    return response.data;
  }
);

export const ProductSKUSlice = createSlice({
  name: "ProductSKU",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    product:{},

    productionCategoryOptions: [],
    searchableFieldsOptions: [],

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getProductionCategoryOptions.fulfilled, (state, action) => {
        state.productionCategoryOptions = action.payload;
      })
      .addCase(getSearchableFieldsOptions.fulfilled, (state, action) => {
        state.searchableFieldsOptions = action.payload;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      })
  },
});

export default ProductSKUSlice.reducer;
