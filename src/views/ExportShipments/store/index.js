import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import baseUrl from "../../../config";
import Api from "../../../http";

export const getExportData = createAsyncThunk(
  "Export/getExportData",
  async () => {
    const response = await Api.get(`export-data`);
    return response.data;
  }
);

export const exportQuickbooks = createAsyncThunk(
  "Export/exportqb",
  async (data) => {
    const response = await axios.get(`${baseUrl}/export-qb`, {
      params: data,
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("accessToken")),
      },
    });

    if (response?.status == 203) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Missing Parameters",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const outputFilename = `${Date.now()}.xlsx`;
      const url = URL.createObjectURL(new Blob([response?.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", outputFilename);
      document.body.appendChild(link);
      link.click();

      // OR you can save/write file locally.
      fs.writeFileSync(outputFilename, response?.data);
    }
    return response.data;
  }
);

export const exportQuickbooksCSV = createAsyncThunk(
  "Export/exportqb",
  async (data) => {
    const response = await axios.get(`${baseUrl}/export-qb-csv`, {
      params: data,
      responseType: "blob",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization:
          "Bearer " + JSON.parse(localStorage.getItem("accessToken")),
      },
    });
    if (response?.status == 203) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Missing Parameters",
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (response?.status == 204) {
      const MySwal = withReactContent(Swal);
      MySwal.fire({
        position: "top-end",
        icon: "error",
        title: "Something went wrong!!!",
        showConfirmButton: false,
        timer: 1500,
      });
    } else {
      const outputFilename = `${Date.now()}.xlsx`;
      const url = URL.createObjectURL(new Blob([response?.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", outputFilename);
      document.body.appendChild(link);
      link.click();

      // OR you can save/write file locally.
      fs.writeFileSync(outputFilename, response?.data);
    }
    return response.data;
  }
);

export const getOrderStoreOptions = createAsyncThunk(
  "Export/getOrderStoreOptions",
  async () => {
    const response = await Api.get(`import-order-store-options`);
    return response.data;
  }
);

export const ExportSlice = createSlice({
  name: "Export",
  initialState: {
    exportData: [],
    orderStoreOptions: [],
    trackingStoreOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getExportData.fulfilled, (state, action) => {
        state.exportData = action.payload?.data;
      })
      .addCase(getOrderStoreOptions.fulfilled, (state, action) => {
        state.orderStoreOptions = action.payload;
      });
  },
});

export default ExportSlice.reducer;
