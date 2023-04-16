// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "EmailTemplate/getAllData",
  async (data) => {
    const response = await Api.get("email-template", { params: data });
    return response.data;
  }
);

export const getTemplate = createAsyncThunk(
  "EmailTemplate/getTemplate",
  async (id) => {
    const response = await Api.get(`email-template/${id}`);
    return response.data;
  }
);

export const AddTemplate = createAsyncThunk(
  "EmailTemplate/AddTemplate",
  async (data) => {
    const response = await Api.post("email-template", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateTemplate = createAsyncThunk(
  "EmailTemplate/UpdateTemplate",
  async (data) => {
    const response = await Api.post(`email-template/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const sendEmail = createAsyncThunk(
  "BulkEmail/sendEmail",
  async (data) => {
    const response = await Api.post("send-bulk-email", data);
    if (response?.status == 201) {
      return { status: true, error: response?.data?.error, success: response?.data?.success };
    } else {
      return { status: false, error: response?.data?.error, success: response?.data?.success };
    }
  }
);

export const getEmailTemplateOptions = createAsyncThunk(
  "BulkEmail/getEmailTemplateOptions",
  async () => {
    const response = await Api.get(`email-template-options`);
    return response?.data;
  }
);

export const BulkEmailSlice = createSlice({
  name: "BulkEmail",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    template: {},

    typeOptions: [
      { value: '', label: 'Store Order ID' },
      { value: '5p', label: '5p Order ID' },
    ],
    templateOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getEmailTemplateOptions.fulfilled, (state, action) => {
        state.templateOptions = action.payload;
      });
      
  },
});

export default BulkEmailSlice.reducer;
