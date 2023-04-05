// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Manufacture/getAllData",
  async (data) => {
    const response = await Api.get("manufacture", { params: data });
    return response.data;
  }
);

export const getManufacture = createAsyncThunk(
  "Manufacture/getManufacture",
  async (id) => {
    const response = await Api.get(`manufacture/${id}`);
    return response.data;
  }
);

export const AddManufacture = createAsyncThunk(
  "Manufacture/AddManufacture",
  async (data) => {
    const response = await Api.post("manufacture", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateManufacture = createAsyncThunk(
  "UpdateManufacture/UpdateManufacture",
  async (data) => {
    const response = await Api.post(`manufacture/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteManufacture = createAsyncThunk(
  "Manufacture/DeleteManufacture",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-manufacture/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getManufacturePermission = createAsyncThunk(
  "Manufacture/getManufacturePermission",
  async (id) => {
    const response = await Api.get(`manufacture-access/${id}`);
    return response.data;
  }
);

export const UpdateManufacturePermission = createAsyncThunk(
  "Manufacture/UpdateManufacturePermission",
  async (data) => {
    const response = await Api.post(`manufacture-access`, data);
    return response.data;
  }
);

export const ManufacturesSlice = createSlice({
  name: "Manufactures",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    manufacture: {},
    manufacturePermission: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getManufacture.fulfilled, (state, action) => {
        state.manufacture = action.payload;
      })
      .addCase(getManufacturePermission.fulfilled, (state, action) => {
        state.manufacturePermission = action.payload;
      });
  },
});

export default ManufacturesSlice.reducer;
