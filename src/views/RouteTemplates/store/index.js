// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Template/getAllData", async () => {
  const response = await Api.get("template");
  return response.data;
});

export const AddTemplate = createAsyncThunk(
  "Template/AddTemplate",
  async (data, { dispatch }) => {
    const response = await Api.post("template", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteTemplate = createAsyncThunk(
  "Template/DeleteTemplate",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-template/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getTemplate = createAsyncThunk(
  "Template/getTemplate",
  async (id) => {
    const response = await Api.get(`template/${id}`);
    return response.data;
  }
);

export const UpdateTemplate = createAsyncThunk(
  "Template/UpdateTemplate",
  async (data) => {
    const response = await Api.post(`template/${data?.id}`, data?.data);
    return response.data;
  }
);

export const StationSlice = createSlice({
  name: "Station",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    template: {},

    repeatedOption: [],
    delimitedOption: [],
    formatOption: [],
    catOption: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getTemplate.fulfilled, (state, action) => {
        state.template = action.payload?.data;
        state.repeatedOption = action.payload?.repeatedOption;
        state.delimitedOption = action.payload?.delimitedOption;
        state.formatOption = action.payload?.formatOption;
        state.catOption = action.payload?.catOption;
      });
  },
});

export default StationSlice.reducer;
