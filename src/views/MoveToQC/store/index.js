// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "moveToQC/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.moveToQC;
    const response = await Api.get("move-to-qc", {
      params: { ...searchParams },
    });
    return response.data;
  }
);

export const getShowData = createAsyncThunk(
  "moveToQC/getShowData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.moveToQC;
    const response = await Api.get("move-show", {
      params: { ...searchParams },
    });
    if (response?.status == 201 || response?.status == 201) {
      return { status: true, data: response?.data };
    }
    else {
      return { status: false, data: response?.data };
    }
  }
);

export const getStoreOptions = createAsyncThunk(
  "moveToQC/getStoreOptions",
  async () => {
    const response = await Api.get("item-store-options");
    return response.data;
  }
);

export const moveToQCSlice = createSlice({
  name: "moveToQC",
  initialState: {
    data: [],
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
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
      .addCase(getShowData.fulfilled, (state, action) => {
        state.showData = action.payload?.data;
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

export const { setParams, setSearchParams } = moveToQCSlice.actions;
export default moveToQCSlice.reducer;
