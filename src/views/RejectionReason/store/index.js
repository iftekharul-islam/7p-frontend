// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "RejectionReason/getAllData",
  async (data) => {
    const response = await Api.get("reasons", { params: data });
    return response.data;
  }
);

export const sortOrderReason = createAsyncThunk(
  "RejectionReason/sortOrderReason",
  async (data, { dispatch }) => {
    const response = await Api.get(`reasons/${data?.direction}/${data?.id}`);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const AddReason = createAsyncThunk(
  "RejectionReason/AddReason",
  async (data, {dispatch}) => {
    const response = await Api.post("reasons", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteReason = createAsyncThunk(
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

export const StationSlice = createSlice({
  name: "Station",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload
      })
  },
});

export default StationSlice.reducer;
