import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "UnbatchableItems/getAllData",
  async () => {
    const response = await Api.get("unbatchable-items");
    return response.data;
  }
);


export const UnbatchableItemsSlice = createSlice({
  name: "UnbatchableItems",
  initialState: {
    data: [],
    statusOptions: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllData.fulfilled, (state, action) => {
      state.data = action.payload?.items;
      state.statusOptions = action.payload?.order_statuses;
    });
  },
});

export default UnbatchableItemsSlice.reducer;
