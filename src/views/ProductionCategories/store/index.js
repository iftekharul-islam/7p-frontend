// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Categories/getAllData",
  async (data) => {
    const response = await Api.get("categories", { params: data });
    return response.data;
  }
);

export const getCategory = createAsyncThunk("Categories/getCategory", async (id) => {
  const response = await Api.get(`categories/${id}`);
  return response.data;
});

export const AddCategory = createAsyncThunk(
  "Categories/AddCategory",
  async (data) => {
    const response = await Api.post("categories", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateCategory = createAsyncThunk(
  "Categories/UpdateCategory",
  async (data) => {
    const response = await Api.post(`categories/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteCategories = createAsyncThunk(
  "Categories/DeleteCategories",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-categories/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);


export const CategoriesSlice = createSlice({
  name: "Categories",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    category: {},

    typeOption: [
      { label: "Not Assigned", value: "X" },
      { label: "Graphics", value: "G" },
      { label: "Production", value: "P" },
      { label: "Quality Control", value: "Q" },
    ]
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
  },
});

export default CategoriesSlice.reducer;
