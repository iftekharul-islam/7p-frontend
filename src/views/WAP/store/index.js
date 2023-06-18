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

export const getShowData = createAsyncThunk("WAP/getShowData", async (id) => {
  const response = await Api.get(`wap-detailsa/${id}`);
  return response.data;
});

export const getWAPData = createAsyncThunk("WAP/getWAPData", async (id) => {
  const response = await Api.get(`wap-details/${id}`);
  return response.data;
});
export const WAPSlice = createSlice({
  name: "WAP",
  initialState: {
    data: [],
    WAPData: {},
    showData: [],

    params: {},

    searchParams: {},

    allData: [],

    storeOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getWAPData.fulfilled, (state, action) => {
        state.WAPData = action.payload;
      })
      .addCase(getShowData.fulfilled, (state, action) => {
        state.showData = action.payload;
      });
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
