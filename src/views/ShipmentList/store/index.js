// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "shipmentLists/getAllData",
  async (paramsData, { getState }) => {
    const { params, searchParams } = getState()?.shipmentLists;
    const response = await Api.get("shipping", {
      params: { ...searchParams, ...params, ...paramsData },
    });
    return response.data;
  }
);

export const getSearchInOptions = createAsyncThunk(
  "shipmentLists/getSearchInOptions",
  async () => {
    const response = await Api.get("shipping-search-in-options");
    return response.data;
  }
);

export const getStoreOptions = createAsyncThunk(
  "shipmentLists/getStoreOptions",
  async () => {
    const response = await Api.get("order-store-options");
    return response.data;
  }
);

export const packageReturned = createAsyncThunk(
  "shipmentLists/packageReturned",
  async (params) => {
    const response = await Api.post(`ship-order-returned`, params);
    return response?.data;
  }
);

export const voidShipment = createAsyncThunk(
  "shipmentLists/voidShipment",
  async (params) => {
    const response = await Api.get(`ship-order-void`, {params});
    return response?.data;
  }
);

export const getShowData = createAsyncThunk("shipmentLists/getShowData", async (id) => {
  const response = await Api.get(`wap-details/${id}`);
  if (response.data?.status == 200) {
    return response.data;
  } else {
    return null;
  }
});

export const getWAPData = createAsyncThunk("shipmentLists/getWAPData", async (params) => {
  const response = await Api.get(`wap-details`, { params });
  if (response.data?.status == 200) {
    return response.data;
  }
});

export const reprintWap = createAsyncThunk(
  "shipmentLists/reprintWap",
  async (params, { dispatch }) => {
    const response = await Api.get(`reprint-wap-label`, { params });
    dispatch(getWAPData(response?.data));
  }
);

export const rejectWapItem = createAsyncThunk(
  "shipmentLists/rejectWapItem",
  async (params) => {
    const response = await Api.get(`reject-wap-item`, { params });
  }
);

export const badAddressWAP = createAsyncThunk(
  "shipmentLists/badAddressWAP",
  async (params) => {
    const response = await Api.post(`bad-address`, params);
    return response?.data;
  }
);

export const badAddressQC = createAsyncThunk(
  "shipmentLists/badAddressQC",
  async (params) => {
    const response = await Api.post(`shipping-add-wap`, params);
    return response?.data;
  }
);

export const ShipItem = createAsyncThunk(
  "shipmentLists/ShipItem",
  async (params) => {
    console.log("🚀 ~ file: index.js:66 ~ params:", params)
    const response = await Api.post(`ship-item`, params);
    return response?.data;
    // if (response?.data?.status == 201) {
    //   dispatch(getWAPData(response?.data?.params));
    // }
  }
);

export const shipmentListsSlice = createSlice({
  name: "shipmentLists",
  initialState: {
    data: [],

    WAPData: {},
    showData: [],

    params: {page: 1},

    searchParams: {},

    allData: [],

    storeOptions: [],
    searchInOptions: []
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
        state.params = { ...state.params, count: action?.payload?.ships?.last_page };
      })
      .addCase(getSearchInOptions.fulfilled, (state, action) => {
        state.searchInOptions = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })


      .addCase(getWAPData.fulfilled, (state, action) => {
        if (action.payload?.status == 200) {
          state.WAPData = action.payload;
        }
      })
      .addCase(getShowData.fulfilled, (state, action) => {
        state.showData = action.payload;
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

export const { setParams, setSearchParams } = shipmentListsSlice.actions;
export default shipmentListsSlice.reducer;
