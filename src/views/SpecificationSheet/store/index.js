import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "Specification/getAllData",
  async (data) => {
    const response = await Api.get("specification-product", { params: data });
    return response.data;
  }
);

export const getSpecifiction = createAsyncThunk(
  "Specification/getSpecifiction",
  async (id) => {
    const response = await Api.get(`specification-product/${id}`);
    return response.data;
  }
);

export const AddSpecifiction = createAsyncThunk(
  "Specification/AddSpecifiction",
  async (data) => {
    const response = await Api.post("specification-product", data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const UpdateSpecifiction = createAsyncThunk(
  "Specification/UpdateSpecifiction",
  async (data, { dispatch }) => {
    const response = await Api.post(
      `specification-product/${data?.id}`,
      data?.data
    );
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteSpecifiction = createAsyncThunk(
  "Specification/DeleteSpecifiction",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-specification-product/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
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

export const getVendorsOptions = createAsyncThunk(
  "Specification/getVendorsOptions",
  async (data) => {
    const response = await Api.get("vendor-options", { params: data });
    return response.data;
  }
);

export const getSkus = createAsyncThunk(
  "Specification/getSkus",
  async (data) => {
    const response = await Api.get("skus", { params: data });
    return response.data;
  }
);

export const SpecificationSlice = createSlice({
  name: "Specification",
  initialState: {
    data: [],
    total: 1,
    specificationData: {
      labor_expense_cost_variation: [],
      delivery_cost_variation: [],
    },

    params: {},
    allData: [],
    active: 1,

    specification: {},

    makeSampleDataOptions: [],
    productionCategoriesOptions: [],
    searchableFieldsOptions: [],
    statusesOptions: [],
    webImageStatusOptions: [],
    vendorOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.total = action.payload?.total;
      })
      .addCase(getSpecifiction.fulfilled, (state, action) => {
        state.specificationData = action.payload;
      })
      .addCase(getSearchableFieldsOptions.fulfilled, (state, action) => {
        state.searchableFieldsOptions = action.payload;
      })
      .addCase(getProductionCategoriesOptions.fulfilled, (state, action) => {
        state.productionCategoriesOptions = action.payload;
      })
      .addCase(getWebImageStatusOptions.fulfilled, (state, action) => {
        state.webImageStatusOptions = action.payload;
      })
      .addCase(getMakeSampleDataOptions.fulfilled, (state, action) => {
        state.makeSampleDataOptions = action.payload;
      })
      .addCase(getStatusesOptions.fulfilled, (state, action) => {
        state.statusesOptions = action.payload;
      })
      .addCase(getVendorsOptions.fulfilled, (state, action) => {
        state.vendorOptions = action.payload;
      })
      .addCase(getSkus.fulfilled, (state, action) => {
        state.specificationData = {
          ...state.specificationData,
          ...action.payload,
        };
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
      state.specificationData = {
        ...state.specificationData,
        ...action.payload,
      };
    },
    resetSpecificationData: (state, action) => {
      state.specificationData = {
        labor_expense_cost_variation: [],
        delivery_cost_variation: [],
      };
      state.active = 1;
    },
  },
});
export const { setActive, nextTab, prevTab, setSpecificationData, resetSpecificationData } =
  SpecificationSlice.actions;
export default SpecificationSlice.reducer;
