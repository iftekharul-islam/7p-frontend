// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Orders/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.orders;
    const response = await Api.get("orders", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getOrder = createAsyncThunk("Orders/getOrder", async (id) => {
  const response = await Api.get(`orders/${id}`);
  return response.data;
});

export const EditOrder = createAsyncThunk("Orders/AddOrder", async (data) => {
  const response = await Api.post(`orders/${data?.id}`, data?.data);
  if (response?.status == 201) {
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

export const BatchedOrder = createAsyncThunk(
  "Orders/BatchedOrder",
  async (id) => {
    const response = await Api.get(`batched-orders/${id}`);
    if (response?.status == 201) {
      return { status: true };
    }
  }
);

export const UpdateStore = createAsyncThunk(
  "Orders/UpdateStore",
  async (data) => {
    const response = await Api.post("orders-update-store", data);
  }
);

export const UpdateMethod = createAsyncThunk(
  "Orders/UpdateMethod",
  async (data) => {
    const response = await Api.post("orders-update_method", data);
  }
);

export const UpdateShipDate = createAsyncThunk(
  "Orders/UpdateShipDate",
  async (data) => {
    const response = await Api.post("orders-update_shipdate", data);
  }
);

export const getOperatorOptions = createAsyncThunk(
  "Order/getOperatorOptions",
  async () => {
    const response = await Api.get(`order-operator-options`);
    return response.data;
  }
);
export const getSearchOptions = createAsyncThunk(
  "Order/getSearchOptions",
  async () => {
    const response = await Api.get(`order-search-options`);
    return response.data;
  }
);
export const getStatusOptions = createAsyncThunk(
  "Order/getStatusOptions",
  async () => {
    const response = await Api.get(`order-status-options`);
    return response.data;
  }
);
export const getStoreOptions = createAsyncThunk(
  "Order/getStoreOptions",
  async () => {
    const response = await Api.get(`order-store-options`);
    return response.data;
  }
);
export const getShipOptions = createAsyncThunk(
  "Order/getShipOptions",
  async () => {
    const response = await Api.get(`order-ship-options`);
    return response.data;
  }
);
export const getProductOptions = createAsyncThunk(
  "Order/getProductOptions",
  async (query) => {
    const response = await Api.post("order-product-options", { query });
    return response.data;
  }
);

export const getEmailTypeOptions = createAsyncThunk(
  "Order/getEmailTypeOptions",
  async () => {
    const response = await Api.get("order-email-type-options");
    return response.data;
  }
);

export const getShippingMethodOptions = createAsyncThunk(
  "Order/getShippingMethodOptions",
  async () => {
    const response = await Api.get("order-shipping-method-options");
    return response.data;
  }
);

export const sendEmail = createAsyncThunk("Order/sendEmail", async (data) => {
  const response = await Api.post("orders-send-email", data);
  return response.data;
});

export const updateTracking = createAsyncThunk(
  "Order/updateTracking",
  async (data) => {
    const response = await Api.post("orders-item-tracking", data);
    return response.data;
  }
);

export const OrdersSlice = createSlice({
  name: "Orders",
  initialState: {
    data: [],
    total: 1,
    totalData: {},

    order: null,

    params: {
      page: 1,
    },

    searchParams: {
      search_for_first: null,
      operator_first: null,
      search_in_first: null,

      search_for_second: null,
      operator_second: null,
      search_in_second: null,

      start_date: null,
      end_date: null,

      status: null,
      store: null,
    },

    allData: [],

    operatorOptions: [],
    searchOptions: [],
    statusOptions: [],
    storeOptions: [],
    shipOptions: [],
    emailTypeOptions: [],
    shippingMethodOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.order?.data;
        state.total = action.payload?.order?.total;
        state.totalData = {
          ...action.payload?.total,
          total: action.payload?.order?.total,
        };
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.order = { ...action.payload, ...action.payload?.customer };
      })
      .addCase(getOperatorOptions.fulfilled, (state, action) => {
        state.operatorOptions = action.payload;
      })
      .addCase(getSearchOptions.fulfilled, (state, action) => {
        state.searchOptions = action.payload;
      })
      .addCase(getStatusOptions.fulfilled, (state, action) => {
        state.statusOptions = action.payload;
      })
      .addCase(getStoreOptions.fulfilled, (state, action) => {
        state.storeOptions = action.payload;
      })
      .addCase(getShipOptions.fulfilled, (state, action) => {
        state.shipOptions = action.payload;
      })
      .addCase(getEmailTypeOptions.fulfilled, (state, action) => {
        state.emailTypeOptions = action.payload;
      })
      .addCase(getShippingMethodOptions.fulfilled, (state, action) => {
        state.shippingMethodOptions = action.payload;
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

export const { setParams, setSearchParams } = OrdersSlice.actions;
export default OrdersSlice.reducer;
