// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Order/getAllData", async (data) => {
  const response = await Api.get("purchased-orders", { params: data });
  return response.data;
});

export const getVendor = createAsyncThunk("Order/getVendor", async (id) => {
  const response = await Api.get(`vendors/${id}`);
  return response.data;
});

export const getOrder = createAsyncThunk("Order/getOrder", async (id) => {
  const response = await Api.get(`purchased-orders/${id}`);
  return response.data;
});


export const AddPurchaseOrder = createAsyncThunk(
  "Order/AddPurchaseOrder",
  async (data, { dispatch }) => {
    const response = await Api.post("purchased-orders", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdatePurchaseOrder = createAsyncThunk(
  "Order/UpdatePurchaseOrder",
  async (data, { dispatch }) => {
    const response = await Api.post(`orders/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteOrder = createAsyncThunk(
  "Order/DeleteOrder",
  async (id, { dispatch }) => {
    const response = await Api.post(`purchased-orders-orders/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const ReceiveOrder = createAsyncThunk(
  "Order/ReceiveOrder",
  async (data) => {
    const response = await Api.post(`receive-purchased-orders`, data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllVendors = createAsyncThunk(
  "Order/getAllVendors",
  async (data) => {
    const response = await Api.get("vendor-options", data);
    return response.data;
  }
);
export const getAllProductByVendor = createAsyncThunk(
  "Order/getAllProductByVendor",
  async (id) => {
    const response = await Api.get(`product-options/${id}`);
    return response.data;
  }
);

export const OrderSlice = createSlice({
  name: "Order",
  initialState: {
    data: [],
    total: 1,

    params: {
      status:1
    },
    allData: [],

    vendor: {},
    order: {},

    vendorOptions: [],
    skuOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getVendor.fulfilled, (state, action) => {
        state.vendor = action.payload;
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = action.payload;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      })
      .addCase(getAllProductByVendor.fulfilled, (state, action) => {
        state.skuOptions = action.payload;
      });
  },
  reducers: {
    updateParams(state, action) {
      state.params = {...state.params, ...action.payload}
    }
  },
});
export const { updateParams } = OrderSlice.actions
export default OrderSlice.reducer;
