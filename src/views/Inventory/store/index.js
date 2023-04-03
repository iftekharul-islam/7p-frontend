// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Inventory/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.inventories;
    const response = await Api.get("inventories", { params:{...params, ...searchParams} });
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

export const InventorySlice = createSlice({
  name: "Inventory",
  initialState: {
    data: [],
    total: 1,
    cost: null,

    params: {
      page: 1,
    },

    searchParams: {
      search_for_first: null,
      operator_first: "in",
      search_in_first: "stock_no_unique",
      search_for_second: null,
      operator_second: "in",
      search_in_second: "stock_no_unique",
      search_for_third: null,
      operator_third: "in",
      search_in_third: "stock_no_unique",
      search_for_fourth: null,
      operator_fourth: "in",
      search_in_fourth: "stock_no_unique",

      vendor_id: null,
      section_ids: null,
      sort_by: null,
      sorted: "asc",
    },

    allData: [],

    vendor: {},
    stock: null,
    vendorOptions: [],
    sectionOptions: [],
    inOptions: [
      { label: "In", value: "in" },
      { label: "Not In", value: "not_in" },
      { label: "Starts With", value: "starts_with" },
      { label: "Ends With", value: "ends_with" },
      { label: "Equals", value: "equals" },
      { label: "Not Equal", value: "not_equals" },
      { label: "Less Than", value: "less_than" },
      { label: "Greater Than", value: "greater_than" },
      { label: "Is Blank", value: "blank" },
      { label: "Is Not Blank", value: "not_blank" },
    ],
    searchOptions: [
      { label: "Stock Number", value: "stock_no_unique" },
      { label: "Description", value: "stock_name_discription" },
      { label: "Child SKU", value: "child_sku" },
      { label: "Bin", value: "wh_bin" },
      { label: "Quantity on Hand", value: "qty_on_hand" },
      { label: "Last Cost", value: "last_cost" },
      { label: "Total Value", value: "value" },
      { label: "Total Sales", value: "total_sale" },
      { label: "30 Days of Sales", value: "sales_30" },
      { label: "Quantity Available", value: "qty_av" },
      { label: "Need to Reorder", value: "until_reorder" },
    ],
    sortOptions: [
      { label: "Stock Number", value: "stock_no_unique" },
      { label: "Need to Reorder", value: "until_reorder" },
      { label: "Description", value: "stock_name_discription" },
      { label: "Bin", value: "wh_bin" },
      { label: "Quantity on Hand", value: "qty_on_hand" },
      { label: "Total Sales", value: "total_sale" },
      { label: "30 Days of Sales", value: "sales_30" },
      { label: "90 Days of Sales", value: "sales_90" },
      { label: "Last Cost", value: "last_cost" },
      { label: "Total Value", value: "value" },
    ],
    directionOptions: [
      { label: "Ascending", value: "asc" },
      { label: "Descending", value: "desc" },
    ],
    divisorOptions: [
      { label: "Divide by One", value: "1" },
      { label: "Divide by Two", value: "2" },
      { label: "Divide by Three", value: "3" },
      { label: "Divide by Four", value: "4" },
      { label: "Divide by Five", value: "5" },
      { label: "Divide by Six", value: "6" },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.inventories?.data;
        state.cost = action.payload?.total_cost;
        state.total = action.payload?.inventories?.total;
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

export const { setParams, setSearchParams } = InventorySlice.actions;
export default InventorySlice.reducer;
