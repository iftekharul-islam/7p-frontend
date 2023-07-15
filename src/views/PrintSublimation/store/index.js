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

export const printSublimation = createAsyncThunk(
  "printSublimations/printSublimation",
  async (data, { dispatch }) => {
    const response = await Api.post("sublimation-print", data);
    if (response.data?.status == 201 || response.data?.status == 200) {
      const blob = new Blob([response?.data?.data]);
      const fileDownloadUrl = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = fileDownloadUrl;
      link.download = "test.xml";
      link.click();
      URL.revokeObjectURL(fileDownloadUrl);
    } else if (response.data?.status == 203 && response.data?.reload) {
      dispatch(getAllData());
    }
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
