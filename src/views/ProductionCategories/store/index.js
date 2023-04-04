// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Station/getAllData",
  async (data) => {
    const response = await Api.get("stations", { params: data });
    return response.data;
  }
);

export const getStation = createAsyncThunk("Station/getStation", async (id) => {
  const response = await Api.get(`stations/${id}`);
  return response.data;
});

export const AddStation = createAsyncThunk(
  "Station/AddStation",
  async (data) => {
    const response = await Api.post("stations", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateStation = createAsyncThunk(
  "Station/UpdateStation",
  async (data) => {
    const response = await Api.post(`stations/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getSectionOption = createAsyncThunk("Station/getSectionOption", async () => {
  const response = await Api.get(`section-options`);
  return response.data;
});

export const StationSlice = createSlice({
  name: "Station",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    station: {},

    sectionOption: [],
    typeOption: [
      { label: "Not Assigned", value: "X" },
      { label: "Graphics", value: "G" },
      { label: "Production", value: "P" },
      { label: "Quality Control", value: "Q" },
    ]
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getStation.fulfilled, (state, action) => {
        state.station = action.payload;
      })
      .addCase(getSectionOption.fulfilled, (state, action) => {
        state.sectionOption = action.payload;
      })
  },
});

export default StationSlice.reducer;
