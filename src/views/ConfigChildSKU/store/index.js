// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "ConfigChildSKU/getAllData",
  async (_, { getState, dispatch }) => {
    dispatch(toggleLoader())
    const { params, searchParams } = getState()?.configchildskus;
    const response = await Api.get("config-child-sku", {
      params: { ...params, ...searchParams },
    });
    dispatch(toggleLoader())
    return response?.data;
  }
);

export const getChildData = createAsyncThunk(
  "ConfigChildSKU/getChildData",
  async (id) => {
    const response = await Api.get("get-config-child-sku/" + id);
    return response.data;
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

export const newChildSku = createAsyncThunk(
  "UnbatchableItems/newChildSku",
  async (_, { getState }) => {
    const { childData } = getState()?.configchildskus;
    const response = await Api.post("add-child-sku", childData);
    if (response.data?.status === 201) {
      return true;
    } else {
      return false;
    }
  }
);

export const updateChildSku = createAsyncThunk(
  "UnbatchableItems/updateChildSku",
  async (_, { getState }) => {
    const { childData } = getState()?.configchildskus;
    const response = await Api.post("update-child-sku", childData);
    if (response.data?.status === 201) {
      return true;
    } else {
      return false;
    }
  }
);

export const updateChildSkus = createAsyncThunk(
  "UnbatchableItems/updateChildSkus",
  async (_, { getState, dispatch }) => {
    const { selectedSKU } = getState()?.configchildskus;
    const response = await Api.post("update-child-skus", selectedSKU);
    if (response.data?.status === 201) {
      dispatch(getAllData())
      return true;
    } else {
      return false;
    }
  }
);

export const updateSingleSku = createAsyncThunk(
  "UnbatchableItems/updateChildSkus",
  async (data, { dispatch }) => {
    const response = await Api.post("update-single-sku", data);
    if (response.data?.status === 201) {
      dispatch(getAllData());
    }
  }
);

export const ConfigChildSKUSlice = createSlice({
  name: "ConfigChildSKU",
  initialState: {
    loading: false,
    data: [],
    childData: {
      allow_mixing: 0,
      batch_route_id: 115,
      graphic_sku: "NeedGraphicFile",
      sure3d: 0,
    },
    selectedSKU: [],
    singleSKU: {},
    total: 1,
    cost: null,

    params: {
      page: 1,
    },

    searchParams: {
      search_for_first: null,
      contains_first: "in",
      search_in_first: null,
      search_for_second: null,
      contains_second: "in",
      search_in_second: null,
      search_for_third: null,
      contains_third: "in",
      search_in_third: null,
      search_for_fourth: null,
      contains_fourth: "in",
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
      { label: "Not Sure3d", value: "0" },
      { label: "Sure3d", value: "1" },
    ],
    mixingOptions: [
      { label: "No", value: "0" },
      { label: "Yes", value: "1" },
    ],
    stockwithImageOptions: [],
    sure3dOptions: [
      { label: "Yes", value: 1 },
      { label: "No", value: 0 },
    ],
    bypassOption: [
      { label: "No", value: 0 },
      { label: "Yes", value: 1 },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
        // state.data = action.payload?.inventories?.data;
        // state.cost = action.payload?.total_cost;
        // state.total = action.payload?.inventories?.total;
      })
      .addCase(getChildData.fulfilled, (state, action) => {
        state.childData = action.payload;
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
    setChildData: (state, action) => {
      state.childData = { ...state.childData, ...action.payload };
    },
    setSelectedSKU: (state, action) => {
      state.selectedSKU = { ...state.selectedSKU, ...action.payload };
    },
    setSingleSKU: (state, action) => {
      state.singleSKU = action.payload;
    },
    dataChange: (state, action) => {
      state.data = { ...state?.data, data: action.payload };
    },
    toggleLoader: (state) => {
      state.loading = !state.loading;
    }
  },
});

export const {
  setParams,
  setSearchParams,
  setChildData,
  setSelectedSKU,
  setSingleSKU,
  dataChange,
  toggleLoader
} = ConfigChildSKUSlice.actions;
export default ConfigChildSKUSlice.reducer;
