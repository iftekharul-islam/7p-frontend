// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "previewBatches/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.previewBatches;
    const response = await Api.get("preview-batches", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getSearchInOptions = createAsyncThunk(
  "previewBatches/getSearchInOptions",
  async () => {
    const response = await Api.get("batch-search-in-options");
    return response.data;
  }
);

export const getStoreOptions = createAsyncThunk(
  "previewBatches/getStoreOptions",
  async () => {
    const response = await Api.get("batch-store-options");
    return response.data;
  }
);

export const getSectionOptions = createAsyncThunk(
  "previewBatches/getSectionOptions",
  async () => {
    const response = await Api.get("section-options");
    return response.data;
  }
);

export const previewBatchesSlice = createSlice({
  name: "previewBatches",
  initialState: {
    data: [],

    params: {},

    searchParams: {
      backorder : '',
    },

    allData: [],

    searchInOptions: [],
    storeOptions: [],
    sectionOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getSearchInOptions.fulfilled, (state, action) => {
        state.searchInOptions = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
      .addCase(getSectionOptions.fulfilled, (state, action) => {
        state.sectionOptions = action.payload;
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

export const { setParams, setSearchParams } = previewBatchesSlice.actions;
export default previewBatchesSlice.reducer;
