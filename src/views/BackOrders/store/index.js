// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "backOrders/getAllData",
  async (_, { getState }) => {
    const { params } = getState()?.backOrders;
    const response = await Api.get("back-orders", {
      params: { ...params },
    });
    return response.data;
  }
);

export const getData = createAsyncThunk(
  "backOrders/getData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.backOrders;
    const response = await Api.get("back-orders-show", {
      params: { ...searchParams },
    });
    return response.data;
  }
);

export const backOrdersSlice = createSlice({
  name: "backOrders",
  initialState: {
    allData: [],
    data: [],

    active: "summary",
    tab: "by_batch",

    params: {},

    searchParams: {
      search_for: null,
      search_in: null,
      tab: "by_batch",
    },

    search_inOptions: [
      { value: "batch_number", label: "Batch Number" },
      { value: "stock_no_unique", label: "Stock Number" },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload;
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.tab = action.payload?.tab;
      });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});

export const { setParams, setSearchParams, setActive } =
  backOrdersSlice.actions;
export default backOrdersSlice.reducer;
