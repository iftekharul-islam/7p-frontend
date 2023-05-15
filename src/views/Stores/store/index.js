// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Store/getAllData", async (data) => {
  const response = await Api.get("stores", { params: data });
  return response.data;
});

export const UpdateVisibility = createAsyncThunk(
  "Store/UpdateVisibility",
  async (id, { dispatch }) => {
    const response = await Api.get(`stores-visibility/${id}`);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const sortStore = createAsyncThunk(
  "Store/sortStore",
  async (data, { dispatch }) => {
    const response = await Api.get(
      `stores-change-order/${data?.direction}/${data?.id}`
    );
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const AddStore = createAsyncThunk(
  "Store/AddReason",
  async (data, { dispatch }) => {
    const response = await Api.post("stores", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllStocks = createAsyncThunk(
  "RejectionReason/DeleteReason",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-reasons/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllVendors = createAsyncThunk(
  "RejectionReason/DeleteReason",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-reasons/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const StoreSlice = createSlice({
  name: "Store",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default StoreSlice.reducer;
