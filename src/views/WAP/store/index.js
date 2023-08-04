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
  const response = await Api.get(`wap-details/${id}`);
  if (response.data?.status == 200) {
    return response.data;
  } else {
    return null;
  }
});

export const getWAPData = createAsyncThunk("WAP/getWAPData", async (params) => {
  const response = await Api.get(`wap-details`, { params });
  if (response.data?.status == 200) {
    return response.data;
  }
});

export const reprintWap = createAsyncThunk(
  "WAP/reprintWap",
  async (params, { dispatch }) => {
    const response = await Api.get(`reprint-wap-label`, { params });
    dispatch(getWAPData(response?.data));
  }
);

export const rejectWapItem = createAsyncThunk(
  "WAP/rejectWapItem",
  async (params) => {
    const response = await Api.get(`reject-wap-item`, { params });
  }
);

export const badAddressAPI = createAsyncThunk(
  "WAP/badAddressAPI",
  async (params, { getState, dispatch }) => {
    const { type, id } = getState()?.WAP?.searchParams;
    const response = await Api.post(`bad-address`, params);
    if (response?.data?.status == 201) {
      dispatch(getWAPData({ [type]: id }));
    }
  }
);

export const ShipItem = createAsyncThunk(
  "WAP/ShipItem",
  async (params, { getState, dispatch }) => {
    const { type, id } = getState()?.WAP?.searchParams;
    const response = await Api.post(`ship-item`, params);
    if (response?.data?.status == 201) {
      dispatch(getWAPData({ [type]: id }));
    }
  }
);

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
        if (action.payload?.status == 200) {
          state.WAPData = action.payload;
        }
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
