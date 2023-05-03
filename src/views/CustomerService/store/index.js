// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "CustomerService/getAllData",
  async (data) => {
    const response = await Api.get("customer-service", { params: data });
    return response.data;
  }
);

export const AddRoute = createAsyncThunk("Routes/AddRoute", async (data) => {
  const response = await Api.post("route", data);
  if (response?.status == 201) {
    // dispatch(getAllData());
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

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

export const getRoute = createAsyncThunk("Routes/getRoute", async (id) => {
  const response = await Api.get(`route/${id}`);
  return response.data;
});

export const UpdateRoute = createAsyncThunk(
  "Routes/UpdateRoute",
  async (data) => {
    const response = await Api.post(`route/${data?.id}`, data?.data);
    return response.data;
  }
);

export const getStationOption = createAsyncThunk(
  "Routes/getStationOption",
  async () => {
    const response = await Api.get(`station-options`);
    return response.data;
  }
);

export const getTemplateOption = createAsyncThunk(
  "Routes/getTemplateOption",
  async () => {
    const response = await Api.get(`template-options`);
    return response.data;
  }
);

export const CustomerServiceSlice = createSlice({
  name: "CustomerService",
  initialState: {
    data: [],
    total: {},

    params: {},
    allData: [],

    active: "address",
    route: {},

    stationOptions: [],
    nestingOption: [
      { label: "Yes", value: "1" },
      { label: "No", value: "0" },
    ],
    templateOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.count;
      })
      .addCase(getRoute.fulfilled, (state, action) => {
        state.route = action.payload;
      })
      .addCase(getStationOption.fulfilled, (state, action) => {
        state.stationOptions = action.payload;
      })
      .addCase(getTemplateOption.fulfilled, (state, action) => {
        state.templateOptions = action.payload;
      });
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});
export const { setActive } = CustomerServiceSlice.actions;
export default CustomerServiceSlice.reducer;
