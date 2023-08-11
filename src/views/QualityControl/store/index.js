// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "qualityControls/getAllData",
  async () => {
    const response = await Api.get("quality-control");
    return response.data;
  }
);

export const getListData = createAsyncThunk(
  "qualityControls/getListData",
  async (id) => {
    const response = await Api.get("quality-control-list", {
      params: { station_id: id },
    });
    return response.data;
  }
);

export const getOrderData = createAsyncThunk(
  "qualityControls/getOrderData",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.post("quality-control-order", {
      batch_number: searchParams?.batch_number,
      user_barcode: searchParams?.user_barcode,
    });
    if (response.data?.status === 200) {
      return response.data?.params;
    }
  }
);

export const getOrder = createAsyncThunk(
  "qualityControls/getOrder",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.post("quality-control-order-data", searchParams);
    return response.data;
  }
);

export const getShowOrder = createAsyncThunk(
  "qualityControls/getShowOrder",
  async (_, { getState }) => {
    const { searchParams } = getState()?.qualityControls;
    const response = await Api.post("quality-control-show-order", searchParams);
    return response.data;
  }
);

export const rejectQCItem = createAsyncThunk(
  "qualityControls/rejectQCItem",
  async (params) => {
    const response = await Api.get("reject-wap-item", { params });
    return response.data;
  }
);

export const approvedItemApi = createAsyncThunk(
  "qualityControls/approvedItemApi",
  async (params) => {
    const response = await Api.post("shipping-add-wap", params);
    if (response?.data?.status === 201) {
      return response?.data?.params;
    }
  }
);

export const QCOrder = createAsyncThunk(
  "qualityControls/QCOrder",
  async (params) => {
    const response = await Api.post("shipping-qc-order", params);
    return response.data;
  }
);

export const qualityControlsSlice = createSlice({
  name: "qualityControls",
  initialState: {
    data: {},
    listData: [],
    orderData: null,
    batchData: null,

    params: {},

    searchParams: null,

    allData: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getListData.fulfilled, (state, action) => {
        state.listData = action.payload;
      })
      .addCase(getOrderData.fulfilled, (state, action) => {
        state.searchParams = { ...state.searchParams, ...action?.payload };
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        if (action?.payload?.status === 206) {
          state.searchParams = action?.payload?.params;
        } else {
          state.batchData = action.payload;
        }
      })
      .addCase(getShowOrder.fulfilled, (state, action) => {
        if (action?.payload?.status === 206) {
          state.searchParams = action?.payload?.params;
        } else {
          state.orderData = action.payload;
        }
      })
      .addCase(approvedItemApi.fulfilled, (state, action) => {
        state.searchParams = action?.payload;
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

export const { setParams, setSearchParams } = qualityControlsSlice.actions;
export default qualityControlsSlice.reducer;
