// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "../../../http";

export const getAllData = createAsyncThunk("Auth/getAllData", async (data) => {
  const response = await Api.get("users", { params: data });
  return response.data;
});

export const getUser = createAsyncThunk("Auth/getUser", async (id) => {
  const response = await Api.get(`users/${id}`);
  return response.data;
});

export const AddUser = createAsyncThunk(
  "Auth/AddUser",
  async (data, { dispatch }) => {
    const response = await Api.post("users", data);
    if (response?.status == 201) {
      dispatch(getAllData({ page: 1 }));
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateUser = createAsyncThunk(
  "Auth/UpdateUser",
  async (data, { dispatch }) => {
    const response = await Api.post(`users/${data?.id}`, data);
    if (response?.status == 201) {
      dispatch(getAllData({ page: 1 }));
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllRoles = createAsyncThunk(
  "Auth/getAllRoles",
  async (data) => {
    const response = await Api.get("role-options", data);
    return response.data;
  }
);

export const getAllVendors = createAsyncThunk(
  "Auth/getAllVendors",
  async () => {
    const response = await Api.get("vendor-options");
    return response.data;
  }
);

export const getAllSections = createAsyncThunk(
  "Auth/getAllSections",
  async () => {
    const response = await Api.get("section-options");
    return response.data;
  }
);

export const getAllStations = createAsyncThunk(
  "Auth/getAllStations",
  async () => {
    const response = await Api.get("station-options");
    return response.data;
  }
);

export const getAllPermits = createAsyncThunk(
  "Auth/getAllPermits",
  async () => {
    const response = await Api.get("permit-options");
    return response.data;
  }
);

export const UserSlice = createSlice({
  name: "User",
  initialState: {
    data: [],
    total: 1,

    params: {},
    allData: [],

    user: null,

    roleOptions: [],
    vendorOptions: [],
    sectionOptions: [
      {
        label: "Section A",
        value: 1,
      },
      {
        label: "Section B",
        value: 2,
      },
      {
        label: "Section C",
        value: 3,
      },
      {
        label: "Section D",
        value: 4,
      },
      {
        label: "Section E",
        value: 5,
      },
    ],
    stationOptions: [
      {
        label: "Station A",
        value: 1,
      },
      {
        label: "Station B",
        value: 2,
      },
      {
        label: "Station C",
        value: 3,
      },
      {
        label: "Station D",
        value: 4,
      },
      {
        label: "Station E",
        value: 5,
      },
    ],
    permitOptions: [
      {
        label: "Permits A",
        value: 1,
      },
      {
        label: "Permits B",
        value: 2,
      },
      {
        label: "Permits C",
        value: 3,
      },
      {
        label: "Permits D",
        value: 4,
      },
      {
        label: "Permits E",
        value: 5,
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(getAllRoles.fulfilled, (state, action) => {
        state.roleOptions = action.payload;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      })
      .addCase(getAllSections.fulfilled, (state, action) => {
        state.sectionOptions = action.payload;
      })
      .addCase(getAllStations.fulfilled, (state, action) => {
        state.stationOptions = action.payload;
      })
      .addCase(getAllPermits.fulfilled, (state, action) => {
        state.permitOptions = action.payload;
      });
  },
});

export default UserSlice.reducer;
