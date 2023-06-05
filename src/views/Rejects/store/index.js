// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "rejects/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.rejects;
    const response = await Api.get("rejects", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getSectionOptions = createAsyncThunk(
  "rejects/getSectionOptions",
  async () => {
    const response = await Api.get("section-options");
    return response.data;
  }
);

export const getGraphicsStatusOptions = createAsyncThunk(
  "rejects/getGraphicsStatusOptions",
  async () => {
    const response = await Api.get("graphics-status-options");
    return response.data;
  }
);

export const getReasonOptions = createAsyncThunk(
  "rejects/getReasonOptions",
  async () => {
    const response = await Api.get("reason-options");
    return response.data;
  }
);

export const getDestinationOptions = createAsyncThunk(
  "rejects/getDestinationOptions",
  async () => {
    const response = await Api.get("destination-options");
    return response.data;
  }
);

export const rejectsSlice = createSlice({
  name: "rejects",
  initialState: {
    data: null,
    total: 1,

    params: {
    },

    searchParams: {},

    allData: [],

    sectionOptions: [],
    graphic_statusOptions: [],
    reasonOptions: [],
    destinationOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getSectionOptions.fulfilled, (state, action) => {
        state.sectionOptions = action.payload;
      })
      .addCase(getGraphicsStatusOptions.fulfilled, (state, action) => {
        state.graphic_statusOptions = action.payload;
      })
      .addCase(getReasonOptions.fulfilled, (state, action) => {
        state.reasonOptions = action.payload;
      })
      .addCase(getDestinationOptions.fulfilled, (state, action) => {
        state.destinationOptions = action.payload;
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

export const { setParams, setSearchParams } = rejectsSlice.actions;
export default rejectsSlice.reducer;
