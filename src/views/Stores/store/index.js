// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk("Store/getAllData", async (data) => {
  const response = await Api.get("stores", { params: data });
  return response.data;
});

export const UpdateVisibility = createAsyncThunk(
  "Store/UpdateVisibility",
  async (id, { dispatch }) => {
    const response = await Api.get(`stores-visibility/${id}`);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const AddStore = createAsyncThunk("Store/AddReason", async (data) => {
  const response = await Api.post("stores", data);
  if (response?.status == 201) {
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

export const getStore = createAsyncThunk("Store/getStore", async (id) => {
  const response = await Api.post(`stores/${id}`);
  return response?.data;
});

export const UpdateStore = createAsyncThunk(
  "Store/UpdateStore",
  async (data) => {
    const response = await Api.post(`stores-update/${data?.id}`, data?.data);
    if (response?.status == 201) {
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const DeleteStore = createAsyncThunk(
  "Store/DeleteStore",
  async (id, { dispatch }) => {
    const response = await Api.post(`stores-delete/${id}`);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const sortStore = createAsyncThunk(
  "Store/sortStore",
  async (data, { dispatch }) => {
    const response = await Api.get(
      `stores-change-order/${data?.direction}/${data?.id}`
    );
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getAllData());
      return response.data;
    }
  }
);

export const getStoreItems = createAsyncThunk(
  "Store/getStoreItems",
  async (id) => {
    const response = await Api.get(`stores-items/${id}`);
    return response.data;
  }
);

export const addStoreItems = createAsyncThunk(
  "Store/addStoreItems",
  async (data, { dispatch }) => {
    const response = await Api.post(`stores-items-add`, data);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getStoreItems(data?.reload_id));
      return true;
    }
  }
);

export const updateStoreItems = createAsyncThunk(
  "Store/updateStoreItems",
  async (data, { dispatch }) => {
    const response = await Api.post(`stores-items-update`, data);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getStoreItems(data?.reload_id));
      return response.data;
    }
  }
);

export const deleteStoreItems = createAsyncThunk(
  "Store/deleteStoreItems",
  async (data, { dispatch }) => {
    const response = await Api.post(`stores-items-delete/${data?.id}`);
    if (response?.status == 201 || response?.status == 200) {
      dispatch(getStoreItems(data?.reload_id));
      return response.data;
    }
  }
);

export const getCompanyOptions = createAsyncThunk(
  "Store/getCompanyOptions",
  async () => {
    const response = await Api.get("stores-company-options");
    return response.data;
  }
);

export const getInputOptions = createAsyncThunk(
  "Store/getInputOptions",
  async () => {
    const response = await Api.get("stores-input-options");
    return response.data;
  }
);

export const getBatchOptions = createAsyncThunk(
  "Store/getBatchOptions",
  async () => {
    const response = await Api.get("stores-batch-options");
    return response.data;
  }
);

export const getConfirmOptions = createAsyncThunk(
  "Store/getConfirmOptions",
  async () => {
    const response = await Api.get("stores-confirm-options");
    return response.data;
  }
);

export const getQCOptions = createAsyncThunk("Store/getQCOptions", async () => {
  const response = await Api.get("stores-qc-options");
  return response.data;
});

export const StoreSlice = createSlice({
  name: "Store",
  initialState: {
    data: [],
    store: {},
    total: 1,

    params: {},
    allData: [],

    companyOptions: [],
    inputOptions: [],
    changeItemsOptions: [
      { value: 1, label: "Yes" },
      { value: 0, label: "No" },
    ],
    batchOptions: [],
    qcOptions: [],
    confirmOptions: [],
    qbOptions: [
      { value: 1, label: "On" },
      { value: 0, label: "Off" },
    ],
    multiOptions: [
      { value: 0, label: "On" },
      { value: 1, label: "Off" },
    ],
    upsOptions: [
      { value: "T", label: "Third Party" },
      { value: "P", label: "Primary Account" },
    ],
    listOptions: [
      { value: "Z", label: "Zebra Label" },
      { value: "P", label: "PDF Template" },
      { value: "B", label: "Both" },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getStore.fulfilled, (state, action) => {
        state.store = action.payload;
      })
      .addCase(getStoreItems.fulfilled, (state, action) => {
        state.store = action.payload;
      })
      .addCase(getCompanyOptions.fulfilled, (state, action) => {
        state.companyOptions = action.payload;
      })
      .addCase(getInputOptions.fulfilled, (state, action) => {
        state.inputOptions = action.payload;
      })
      .addCase(getBatchOptions.fulfilled, (state, action) => {
        state.batchOptions = action.payload;
      })
      .addCase(getConfirmOptions.fulfilled, (state, action) => {
        state.confirmOptions = action.payload;
      })
      .addCase(getQCOptions.fulfilled, (state, action) => {
        state.qcOptions = action.payload;
      });
  },
});

export default StoreSlice.reducer;
