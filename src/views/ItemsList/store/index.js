// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "ItemsList/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.itemsList;
    const response = await Api.get("items-list", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getSearchOptions = createAsyncThunk(
  "ItemsList/getSearchOptions",
  async () => {
    const response = await Api.get(`item-search-options`);
    return response.data;
  }
);
export const getStatusOptions = createAsyncThunk(
  "ItemsList/getStatusOptions",
  async () => {
    const response = await Api.get(`item-status-options`);
    return response.data;
  }
);
export const getStoreOptions = createAsyncThunk(
  "ItemsList/getStoreOptions",
  async () => {
    const response = await Api.get(`item-store-options`);
    return response.data;
  }
);

export const ItemsListSlice = createSlice({
  name: "ItemsList",
  initialState: { 
    data: [],
    total: {
      sum: 0, 
      count: 0,
      unassignedProductCount : 0,
      unassignedOrderCount: 0
    },
    totalData: {},

    order: null,

    params: {
      page: 1,
    },

    searchParams: {
      search_for_first: null,
      search_in_first: null,

      search_for_second: null,
      search_in_second: null,

      start_date: null,
      end_date: null,
      tracking_date: null,

      status: null,
      store: null,
    },

    allData: [],

    searchOptions: [],
    statusOptions: [],
    storeOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.items?.data;
        state.total = action.payload?.total;
        state.totalData = {
          ...action.payload?.total,
          total: action.payload?.order?.total,
        };
      })
      .addCase(getSearchOptions.fulfilled, (state, action) => {
        state.searchOptions = action.payload;
      })
      .addCase(getStatusOptions.fulfilled, (state, action) => {
        state.statusOptions = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
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

export const { setParams, setSearchParams } = ItemsListSlice.actions;
export default ItemsListSlice.reducer;
