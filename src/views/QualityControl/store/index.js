// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "qualityControls/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.get("quality-control", {
      params: { ...searchParams },
    });
    return response.data;
  }
);


export const qualityControlsSlice = createSlice({
  name: "qualityControls",
  initialState: {
    data: [],

    params: {},

    searchParams: {
      batch_number: "",
      user_barcode: "",
    },

    allData: [],

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

export const { setParams, setSearchParams } = qualityControlsSlice.actions;
export default qualityControlsSlice.reducer;
