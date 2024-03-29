// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "tasks/getAllData",
  async (_, { getState }) => {
    const { params, searchParams } = getState()?.tasks;
    const response = await Api.get("task", {
      params: { ...params, ...searchParams },
    });
    return response.data;
  }
);

export const getUserOptions = createAsyncThunk(
  "tasks/getUserOptions",
  async () => {
    const response = await Api.get("user-options");
    return response.data;
  }
);

export const getSearchInOption = createAsyncThunk(
  "tasks/getSearchInOption",
  async () => {
    const response = await Api.get("task-search-in-options");
    return response.data;
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (id, { dispatch }) => {
    const response = await Api.post(`tasks/${id}`);
    dispatch(getAllData());
    return response.data;
  }
);

export const createNewTask = createAsyncThunk(
  "tasks/createNewTask",
  async (data) => {
    const response = await Api.post(`task`, data);
    return response.data;
  }
);

export const updateTasks = createAsyncThunk(
  "tasks/updateTasks",
  async (data) => {
    const response = await Api.post(`task/${data?.id}`, data?.data);
    return response.data;
  }
);

export const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    data: null,
    total: 1,

    params: {},

    searchParams: {},
    newTask: {},

    allData: [],

    taskStatusOptions: [
      { value: "O", label: "Open" },
      { value: "C", label: "Closed" },
      { value: "ALL", label: "All" },
    ],
    userOptions: [],
    searchInOption: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getUserOptions.fulfilled, (state, action) => {
        state.userOptions = action.payload;
      })
      .addCase(getSearchInOption.fulfilled, (state, action) => {
        state.searchInOption = action.payload;
      });
  },
  reducers: {
    setParams: (state, action) => {
      state.params = { ...state.params, ...action.payload };
    },
    setSearchParams: (state, action) => {
      state.searchParams = { ...state.searchParams, ...action.payload };
    },
    setDefaultSearchParams: (state, action) => {
      state.searchParams = action.payload;
    },
    setNewTask: (state, action) => {
      state.newTask = { ...state.newTask, ...action.payload };
    }
  },
});

export const { setParams, setSearchParams, setDefaultSearchParams, setNewTask } = tasksSlice.actions;
export default tasksSlice.reducer;
