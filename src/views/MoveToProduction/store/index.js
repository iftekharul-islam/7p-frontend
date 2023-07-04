// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "moveToProductions/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.moveToProductions;
    const response = await Api.get("move-to-production", {
      params: { ...searchParams },
    });
    return response.data;
  }
);
export const getShowData = createAsyncThunk(
  "moveToProductions/getShowData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.moveToProductions;
    const response = await Api.get("move-show", {
      params: { ...searchParams },
    });
    if (response?.status == 200 || response?.status == 201) {
      return { status: true, data: response?.data };
    }
    else {
      return { status: false, data: response?.data };
    }
  }
);

export const getStoreOptions = createAsyncThunk(
  "moveToProductions/getStoreOptions",
  async () => {
    const response = await Api.get("item-store-options");
    return response.data;
  }
);

export const moveToProductionsSlice = createSlice({
  name: "moveToProductions",
  initialState: {
    data: [],
    showData: [],

    params: {},

    searchParams: {
      isProduction: true,
    },

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

export const { setParams, setSearchParams } = moveToProductionsSlice.actions;
export default moveToProductionsSlice.reducer;
