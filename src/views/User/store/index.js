// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../http";

export const getAllData = createAsyncThunk("Auth/getAllData", async (data) => {
  const response = await Api.get("users", { params: data });
  return response.data;
});

export const AddUser = createAsyncThunk(
  "Auth/AddUser",
  async (data, { dispatch }) => {
    const response = await Api.post("users", data);
    if (response?.status == 201) {
      dispatch(getAllData({ page: 1 }));
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllRoles = createAsyncThunk(
  "Auth/getAllRoles",
  async (data) => {
    const response = await Api.get("role-options", data);
    return response.data;
  }
);

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    roleOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.roleOptions = action.payload;
      });
  },
});

export default UserSlice.reducer;
