// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Parameters/getAllData",
  async (data) => {
    const response = await Api.get("parameters", { params: data });
    return response.data;
  }
);

export const sortOrderReason = createAsyncThunk(
  "Parameters/sortOrderReason",
  async (data, { dispatch }) => {
    const response = await Api.get(`reasons/${data?.direction}/${data?.id}`);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const AddParameter = createAsyncThunk(
  "Parameters/AddParameter",
  async (data) => {
    const response = await Api.post("parameters", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteParameter = createAsyncThunk(
  "Parameters/DeleteParameter",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-parameters/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const ParametersSlice = createSlice({
  name: "Parameters",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
  },
});

export default ParametersSlice.reducer;
