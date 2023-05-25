// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "SectionReports/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.sectionReports;
    const response = await Api.get("section-reports", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);
export const getManufactureOptions = createAsyncThunk(
  "SectionReports/getManufactureOptions",
  async () => {
    const response = await Api.get(`report-manufacture-options`);
    return response.data;
  }
);
export const getStoreOptions = createAsyncThunk(
  "SectionReports/getStoreOptions",
  async () => {
    const response = await Api.get(`report-store-options`);
    return response.data;
  }
);
export const getCompanyOptions = createAsyncThunk(
  "SectionReports/getCompanyOptions",
  async () => {
    const response = await Api.get(`report-company-options`);
    return response.data;
  }
);

export const SectionReportSlice = createSlice({
  name: "SectionReport",
  initialState: { 
    data: [],

    params: {
      page: 1,
    },

    searchParams: {
    },

    allData: [],

    manufactureOptions: [],
    storeOptions: [],
    companyOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getManufactureOptions.fulfilled, (state, action) => {
        state.manufactureOptions = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
      .addCase(getCompanyOptions.fulfilled, (state, action) => {
        state.companyOptions = action.payload;
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

export const { setParams, setSearchParams } = SectionReportSlice.actions;
export default SectionReportSlice.reducer;
