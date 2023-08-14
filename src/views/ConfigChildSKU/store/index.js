// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "ConfigChildSKU/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.configchildskus;
    const response = await Api.get("config-child-sku", { params:{...params, ...searchParams} });
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

export const getBatchRouteOptions = createAsyncThunk(
  "ConfigChildSKU/getBatchRouteOptions",
  async () => {
    const response = await Api.get(`batch-route-options`);
    return response.data;
  }
);
export const getStockWithImageOptions = createAsyncThunk(
  "ConfigChildSKU/getStockWithImageOptions",
  async () => {
    const response = await Api.get(`stock-image-options`);
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

export const ConfigChildSKUSlice = createSlice({
  name: "ConfigChildSKU",
  initialState: {
    data: [],
    total: 1,
    cost: null,

    params: {
      page: 1,
    },

    searchParams: {
      search_for_first: null,
      contains_first: 'in',
      search_in_first: null,
      search_for_second: null,
      contains_second: 'in',
      search_in_second: null,
      search_for_third: null,
      contains_third: 'in',
      search_in_third: null,
      search_for_fourth: null,
      contains_fourth: 'in',
      search_in_fourth: null,

      active: null,
      sku_status: null,
      batch_route_id: null,
      sure3d: null,

      allow_mixing_update: null,
      batch_route_id_update: null,
      graphic_sku_update: null,
      sure3d_update: null,
      frame_size_update: null,
      stock_select: null,
    },

    allData: [],

    inOptions: [
      { label: "In", value: "in" },
      { label: "Not In", value: "not_in" },
      { label: "Starts With", value: "starts_with" },
      { label: "Ends With", value: "ends_with" },
      { label: "Equals", value: "equals" },
      { label: "Not Equal", value: "not_equals" },
      // { label: "Less Than", value: "less_than" },
      // { label: "Greater Than", value: "greater_than" },
      { label: "Is Blank", value: "blank" },
      { label: "Is Not Blank", value: "not_blank" },
    ],
    searchOptions: [
      { label: "Parent SKU", value: "parent_sku" },
      { label: "Child SKU", value: "child_sku" },
      { label: "ID Catalog", value: "id_catalog" },
      { label: "Stock Number", value: "stock_number" },
      { label: "Graphic SKU", value: "graphic_sku" },
      { label: "Name", value: "name" },
    ],
    showOptions: [
      { label: "Show All SKUs", value: "0" },
      { label: "Show Active SKUs", value: "1" },
      { label: "Active & Unbatched", value: "2" },
    ],
    skuOptions: [
      { label: "No Stock Number", value: "SN" },
      { label: "Route Unassigned", value: "RT" },
      { label: "No Template", value: "TM" },
      { label: "Template not Found", value: "TP" },
      { label: "Settings not Found", value: "ST" },
    ],
    batchRouteOptions: [],
    typeOptions: [
      { label: 'Not Sure3d', value: '0'},
      { label: 'Sure3d', value: '1'}
    ],
    mixingOptions: [
      { label: 'No', value: '0'},
      { label: 'Yes', value: '1'}
    ],
    stockwithImageOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        // state.data = action.payload?.inventories?.data;
        // state.cost = action.payload?.total_cost;
        // state.total = action.payload?.inventories?.total;
      })
      .addCase(getVendor.fulfilled, (state, action) => {
        state.vendor = action.payload;
      })
      .addCase(getStock.fulfilled, (state, action) => {
        state.stock = action.payload;
      })
      .addCase(getBatchRouteOptions.fulfilled, (state, action) => {
        state.batchRouteOptions = action.payload;
      })      
      .addCase(getStockWithImageOptions.fulfilled, (state, action) => {
        state.stockwithImageOptions = action.payload;
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

export const { setParams, setSearchParams } = ConfigChildSKUSlice.actions;
export default ConfigChildSKUSlice.reducer;
