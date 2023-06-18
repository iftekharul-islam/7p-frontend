// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "WAP/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.WAP;
    const response = await Api.get("wap", {
      params: { ...searchParams },
    });
    return response.data;
  }
);
export const WAPSlice = createSlice({
  name: "WAP",
  initialState: {
    data: [],
    showData: [],

    params: {},

    searchParams: {
    },

    allData: [],

    storeOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
  },
});

export const { setParams, setSearchParams } = WAPSlice.actions;
export default WAPSlice.reducer;
