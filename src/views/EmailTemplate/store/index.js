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

export const DeleteEmailTemplate = createAsyncThunk(
  "EmailTemplate/DeleteEmailTemplate",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-email-template/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getEmailTemplateKeywords = createAsyncThunk(
  "EmailTemplate/getEmailTemplateKeywords",
  async () => {
    const response = await Api.get(`email-template-keywords`);
    return response?.data;
  }
);

export const EmailTemplateSlice = createSlice({
  name: "EmailTemplate",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    template: {},

    emailTemplateKeywords: [],

  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getEmailTemplateKeywords.fulfilled, (state, action) => {
        state.emailTemplateKeywords = action.payload;
      })
      .addCase(getTemplate.fulfilled, (state, action) => {
        state.template = action.payload;
      });
      
  },
});

export default EmailTemplateSlice.reducer;
