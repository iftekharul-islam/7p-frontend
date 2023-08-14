import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "UnbatchableItems/getAllData",
  async () => {
    const response = await Api.get("unbatchable-items");
    return response.data;
  }
);

export const getBatchRouteOptions = createAsyncThunk(
  "UnbatchableItems/getBatchRouteOptions",
  async () => {
    const response = await Api.get("batch-route-options");
    return response.data;
  }
);

export const newChildSku = createAsyncThunk(
  "UnbatchableItems/newChildSku",
  async (_, { getState }) => {
    const { childData } = getState()?.unbatchableItems;
    const response = await Api.post("add-child-sku", childData);
    if (response.data?.status === 201) {
      return true;
    } else {
      return false;
    }
  }
);

export const UnbatchableItemsSlice = createSlice({
  name: "UnbatchableItems",
  initialState: {
    data: [],
    childData: {
      allow_mixing: 0,
      batch_route_id: 115,
      graphic_sku: "NeedGraphicFile",
    },
    statusOptions: [],
    mixingOptions: [
      {
        label: "Yes",
        value: 1,
      },
      {
        label: "No",
        value: 0,
      },
    ],
    routeOptions: [],
    sure3dOptions: [
      {
        label: "Yes",
        value: 1,
      },
      {
        label: "No",
        value: 0,
      },
    ],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload?.items;
        state.statusOptions = action.payload?.order_statuses;
      })
      .addCase(getBatchRouteOptions.fulfilled, (state, action) => {
        state.routeOptions = action.payload;
      });
  },
  reducers: {
    setChildData: (state, action) => {
      state.childData = { ...state.childData, ...action.payload };
    },
  },
});

export const { setChildData } = UnbatchableItemsSlice.actions;
export default UnbatchableItemsSlice.reducer;
