// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const CallAPI = createAsyncThunk("callAPIs/CallAPI", async (api) => {
  if (!api?.api) {
    return { message: "Please provide API link" };
  } else {
    const response = await Api.get(api?.api);
    return response?.data;
  }
});


export const callAPIsSlice = createSlice({
  name: "callAPIs",
  initialState: {
    data: null,
  },
  extraReducers: (builder) => {
    builder.addCase(CallAPI.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default callAPIsSlice.reducer;
