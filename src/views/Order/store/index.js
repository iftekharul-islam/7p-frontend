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

export const AddStock = createAsyncThunk("Inventory/AddStock", async (data) => {
  const response = await Api.post("inventories", data);
  if (response?.status == 201) {
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

export const UpdateStock = createAsyncThunk(
  "Inventory/UpdateStock",
  async (data) => {
    const response = await Api.post(`inventories/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const CalculateOrdering = createAsyncThunk(
  "Inventory/CalculateOrdering",
  async (data) => {
    const response = await Api.post(`calculate-ordering`, data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getStock = createAsyncThunk("Inventory/getStock", async (id) => {
  const response = await Api.get(`inventories/${id}`);
  return response.data;
});

export const getAllSections = createAsyncThunk(
  "Inventory/getAllSections",
  async () => {
    const response = await Api.get("section-options");
    return response.data;
  }
);

export const getVendor = createAsyncThunk("Inventory/getVendor", async (id) => {
  const response = await Api.get(`vendors/${id}`);
  return response.data;
});

export const DeleteInventory = createAsyncThunk(
  "Inventory/DeleteVendor",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-inventories/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const AddVendor = createAsyncThunk(
  "Vendor/AddVendor",
  async (data, { dispatch }) => {
    const response = await Api.post("vendors", data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateVendor = createAsyncThunk(
  "Vendor/UpdateVendor",
  async (data, { dispatch }) => {
    const response = await Api.post(`vendors/${data?.id}`, data?.data);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getAllStocks = createAsyncThunk(
  "Vendor/getAllStocks",
  async (data) => {
    const response = await Api.get("stock-options", data);
    return response.data;
  }
);

export const getAllVendors = createAsyncThunk(
  "Inventory/getAllVendors",
  async (data) => {
    const response = await Api.get("vendor-options", data);
    return response.data;
  }
);

export const UpdateBinQty = createAsyncThunk(
  "Vendor/UpdateBinQty",
  async (data, { dispatch }) => {
    const response = await Api.post(`update-bin-&-qty`, data);
    dispatch(getAllData());
    return response.data;
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

export const OrdersSlice = createSlice({
  name: "Orders",
  initialState: {
    data: [],
    total: {},

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

    vendor: {},

    operatorOptions: [],
    searchOptions: [],
    statusOptions: [],
    storeOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.order?.data;
        state.total = {
          ...action.payload?.total,
          total: action.payload?.order?.total,
        };
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
      
      
      .addCase(getVendor.fulfilled, (state, action) => {
        state.vendor = action.payload;
      })
      .addCase(getAllStocks.fulfilled, (state, action) => {
        state.stockOptions = action.payload;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      })
      .addCase(getAllSections.fulfilled, (state, action) => {
        state.sectionOptions = action.payload;
      })
      .addCase(getStock.fulfilled, (state, action) => {
        state.stock = action.payload;
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
