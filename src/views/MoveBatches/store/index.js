// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "moveBatches/getAllData",
  async (bodyParams, { getState, dispatch }) => {
    const { params, searchParams } = getState()?.moveBatches;
    const response = await Api.get("move-batches", {
      params: { ...params, ...searchParams, ...bodyParams },
    });
    if (response?.status == 201) {
      dispatch(getAllData({}));
    } else if (response?.status == 200) {
      return response.data;
    }
  }
);

export const getStationOptions = createAsyncThunk(
  "batchList/getStationOptions",
  async () => {
    const response = await Api.get("custom-station-options");
    return response.data;
  }
);

export const moveBatchesSlice = createSlice({
  name: "moveBatches",
  initialState: {
    data: [],
    total: 1,
    cost: null,

    params: {
      page: 1,
    },

    searchParams: {
    },

    moveParams: [],
    allChecked: false,

    allData: [],

    next_in_routeOptions: [],
    stationOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.routes_in_stationOptions = action.payload?.routes_in_station;
        state.stations_in_routeOptions = action.payload?.stations_in_route;
      })
      .addCase(getStationOptions.fulfilled, (state, action) => {
        state.stationOptions = action.payload;
      });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    setMoveParams: (state, action) => {
      let data = [];
      let toggle = state?.allChecked;
      if (action.payload === "all") {
        data = toggle
          ? []
          : state?.data?.batches.map((item) => item?.batch_number);
        toggle = !toggle;
      } else {
        data = state.moveParams?.includes(action.payload)
          ? state.moveParams?.filter((item) => item !== action.payload)
          : [...state.moveParams, action.payload];
      }
      state.moveParams = data;
      state.allChecked = toggle;
    },
  },
});

export const { setParams, setSearchParams, setMoveParams } =
  moveBatchesSlice.actions;
export default moveBatchesSlice.reducer;
