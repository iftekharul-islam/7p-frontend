import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Specification/getAllData",
  async (data) => {
    const response = await Api.get("specification-product", { params: data });
    return response.data;
  }
);

export const getVendor = createAsyncThunk("Vendor/getVendor", async (id) => {
  const response = await Api.get(`vendors/${id}`);
  return response.data;
});

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

export const DeleteVendor = createAsyncThunk(
  "Vendor/DeleteVendor",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-vendors/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const AddStock = createAsyncThunk("Vendor/AddStock", async (data) => {
  const response = await Api.post("add-stock-products", data);
  if (response?.status == 201) {
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

export const getAllStocks = createAsyncThunk(
  "Vendor/getAllStocks",
  async (data) => {
    const response = await Api.get("stock-options", data);
    return response.data;
  }
);

export const getAllVendors = createAsyncThunk(
  "Vendor/getAllVendors",
  async () => {
    return null;
  }
);

export const getSearchableFieldsOptions = createAsyncThunk(
  "Specification/searchableFieldsOptions",
  async () => {
    const response = await Api.get("searchable-fields-options");
    return response.data;
  }
);

export const getProductionCategoriesOptions = createAsyncThunk(
  "Specification/productionCategoriesOptions",
  async () => {
    const response = await Api.get("production-categories-options");
    return response.data;
  }
);

export const getWebImageStatusOptions = createAsyncThunk(
  "Specification/webImageStatusOptions",
  async () => {
    const response = await Api.get("web-image-status-options");
    return response.data;
  }
);

export const getMakeSampleDataOptions = createAsyncThunk(
  "Specification/makeSampleDataOptions",
  async () => {
    const response = await Api.get("make-sample-data-options");
    return response.data;
  }
);

export const getStatusesOptions = createAsyncThunk(
  "Specification/statusesOptions",
  async () => {
    const response = await Api.get("statuses-options");
    return response.data;
  }
);

export const getSkus = createAsyncThunk(
  "Specification/getSkus",
  async (data) => {
    const response = await Api.get("skus", {params: data});
    return response.data;
  }
);

export const SpecificationSlice = createSlice({
  name: "Specification",
  initialState: {
    data: [],
    total: 1,
    specificationData:{sku: 'EB11598'},

    params: {},
    allData: [],
    active: 2,

    vendor: {},
    makeSampleDataOptions: [],
    productionCategoriesOptions: [],
    searchableFieldsOptions: [],
    statusesOptions: [],
    webImageStatusOptions: [],
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
      .addCase(getAllStocks.fulfilled, (state, action) => {
        state.stockOptions = action.payload;
      })
      .addCase(getAllVendors.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      })
      .addCase(getSearchableFieldsOptions.fulfilled, (state, action) => {
        state.searchableFieldsOptions = action.payload;
      })
      .addCase(getProductionCategoriesOptions.fulfilled, (state, action) => {
        state.productionCategoriesOptions = action.payload;
      })
      .addCase(getWebImageStatusOptions.fulfilled, (state, action) => {
        state.webImageStatusOptions = action.payload
      })
      .addCase(getMakeSampleDataOptions.fulfilled, (state, action) => {
        state.makeSampleDataOptions = action.payload
      })
      .addCase(getStatusesOptions.fulfilled, (state, action) => {
        state.statusesOptions = action.payload
      })
      .addCase(getSkus.fulfilled, (state, action) => {
        state.specificationData = {...state.specificationData, ...action.payload};
      });
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    nextTab: (state, action) => {
      state.active = state.active < 6 ? state.active + 1 : 6;
    },
    prevTab: (state, action) => {
      state.active = state.active > 1 ? state.active - 1 : 1;
    },
    setSpecificationData: (state, action) => {
      state.specificationData = {...state.specificationData, ...action.payload};
    }
  },
});
export const { setActive, nextTab, prevTab, setSpecificationData } = SpecificationSlice.actions;
export default SpecificationSlice.reducer;
