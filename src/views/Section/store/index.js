// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Section/getAllData",
  async (data) => {
    const response = await Api.get("sections", { params: data });
    return response.data;
  }
);

export const getSection = createAsyncThunk("Section/getSection", async (id) => {
  const response = await Api.get(`sections/${id}`);
  return response.data;
});

export const AddSection = createAsyncThunk(
  "Section/AddSection",
  async (data) => {
    const response = await Api.post("sections", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateSection = createAsyncThunk(
  "Section/UpdateSection",
  async (data) => {
    const response = await Api.post(`sections/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteSection = createAsyncThunk(
  "Section/DeleteSection",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-sections/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const SectionSlice = createSlice({
  name: "Section",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    section: {},

    summaryOption: [
      { label: "Print Batch Summaries", value: "0" },
      { label: "No Summaries", value: "1" },
    ],
    startFinishOption: [
      { label: "No Button", value: "0" },
      { label: "Finish Button", value: "1" },
    ],
    sameUserOption: [
      { label: "No Restrictions", value: "0" },
      { label: "One user scans in/out", value: "1" },
    ],
    printLabelOption: [
      { label: "No Label", value: "0" },
      { label: "Batch Label", value: "1" },
      { label: "Item Label", value: "2" },
    ],
    inventoryOption: [
      { label: "No Report", value: "0" },
      { label: "Before Production", value: "1" },
      { label: "In Production", value: "2" },
      { label: "bBy batch and Move", value: "3" },
    ],
    invControlOption: [
      { label: "None", value: "0" },
      { label: "Require Stock", value: "1" },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getSection.fulfilled, (state, action) => {
        state.section = action.payload;
      })
  },
});

export default SectionSlice.reducer;
