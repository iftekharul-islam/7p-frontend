// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "printSublimations/getAllData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.printSublimations;
    const response = await Api.get("print-sublimation", {
      params: searchParams,
    });
    return response.data;
  }
);

export const getAllQueues = createAsyncThunk(
  "printSublimations/getAllQueues",
  async () => {
    const response = await Api.get("print-sublimation-queues");
    return response.data;
  }
);

export const printAllSublimation = createAsyncThunk(
  "printSublimations/printAllSublimation",
  async (_, { getState }) => {
    const { data, searchParams } = getState()?.printSublimations;
    const response = await Api.get("print-all", {
      params: {
        printer: searchParams?.printer,
        print_batches: data?.batches?.map((batch) => batch?.batch_number),
      },
    });
    return response.data;
  }
);

export const getPrinterOptions = createAsyncThunk(
  "printSublimations/getPrinterOptions",
  async () => {
    const response = await Api.get("printer-options");
    return response.data;
  }
);

export const getStationsOptions = createAsyncThunk(
  "printSublimations/getStationsOptions",
  async () => {
    const response = await Api.get("print-station-options");
    return response.data;
  }
);

export const printSublimationsSlice = createSlice({
  name: "printSublimations",
  initialState: {
    data: {},
    queues: null,

    params: {},
    searchParams: {},

    printerOptions: [],
    typeOption: [
      { label: "Soft", value: "soft" },
      { label: "Hard", value: "hard" },
      { label: "Other", value: "other" },
    ],
    stationsOptions: [],
    storeOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.storeOptions = action.payload?.stores;
      })
      .addCase(getPrinterOptions.fulfilled, (state, action) => {
        state.printerOptions = action.payload;
      })
      .addCase(getStationsOptions.fulfilled, (state, action) => {
        state.stationsOptions = action.payload;
      })
      .addCase(getAllQueues.fulfilled, (state, action) => {
        state.queues = action.payload;
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

export const { setParams, setSearchParams } = printSublimationsSlice.actions;
export default printSublimationsSlice.reducer;
