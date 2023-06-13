// import axios from 'axios'
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Api from "@src/http";

export const getAllData = createAsyncThunk(
  "createGraphics/getAllData",
  async (data) => {
    const response = await Api.get("create-graphics", { params: data });
    return response.data;
  }
);

export const actionButton = createAsyncThunk(
  "CustomerService/actionButton",
  async (data, { dispatch }) => {
    const response = await Api.get("customer-service-action", { params: data });
    dispatch(getAllData({ tab: data?.tab }));
    return response.data;
  }
);

export const AddRoute = createAsyncThunk("Routes/AddRoute", async (data) => {
  const response = await Api.post("route", data);
  if (response?.status == 201) {
    // dispatch(getAllData());
    return { status: true };
  } else {
    return { status: false, data: response?.data };
  }
});

export const DeleteTemplate = createAsyncThunk(
  "Template/DeleteTemplate",
  async (id, { dispatch }) => {
    const response = await Api.post(`destroy-template/${id}`);
    if (response?.status == 201) {
      dispatch(getAllData());
      return { status: true };
    } else {
      return { status: false, data: response?.data };
    }
  }
);

export const getRoute = createAsyncThunk("Routes/getRoute", async (id) => {
  const response = await Api.get(`route/${id}`);
  return response.data;
});

export const UpdateRoute = createAsyncThunk(
  "Routes/UpdateRoute",
  async (data) => {
    const response = await Api.post(`route/${data?.id}`, data?.data);
    return response.data;
  }
);

export const getStationOption = createAsyncThunk(
  "Routes/getStationOption",
  async () => {
    const response = await Api.get(`station-options`);
    return response.data;
  }
);

export const getTemplateOption = createAsyncThunk(
  "Routes/getTemplateOption",
  async () => {
    const response = await Api.get(`template-options`);
    return response.data;
  }
);

export const createGraphicsSlice = createSlice({
  name: "createGraphics",
  initialState: {
    data: {
      to_export: [],
      error_list: [],
      sections: {
        1: "Drop Ship",
        2: "House",
        3: "Jewelry",
        4: "Leather",
        5: "Red Laser",
        6: "Sublimation",
        7: "WAP",
        8: "Backorder",
        9: "Rejects",
        10: "Sand Blast",
        11: "Fiber Laser/ Engraving",
        12: "Embroidery",
        13: "Customer Service",
        14: "Monogram @ Home",
        15: "Applique",
        16: "Personalize With Style",
        17: "Applique",
        18: "Sublimation OKI",
        19: "SUBSCRIPTIONS",
        20: "UV Printer",
        21: "Production Graphic Dept",
        22: "Sublimation-R2R",
        23: "",
        24: "",
        25: "sadasxcasx",
        26: "",
      },
      count: {
        to_export: 2,
        error: 314,
      },
      total: 25,
      date: [
        "2023-06-13",
        "2023-06-10",
        "2023-06-09",
        "2023-06-06",
        "2023-06-05",
      ],
      items: [
        {
          items_count: "1",
          lines_count: 1,
          station_name: "J-GRD",
          station_description: "J - 20 - Graphics Done",
          type: "G",
          station_id: 30,
          section_id: 21,
          section_name: "Production Graphic Dept",
          earliest_order_date: "2018-05-08",
          earliest_scan_date: "2018-05-09",
          order_1: 0,
          order_2: 0,
          order_3: 1,
          scan_1: 0,
          scan_2: 0,
          scan_3: 1,
        },
        {
          items_count: "1",
          lines_count: 1,
          station_name: "R-GGRL",
          station_description: "LRed - 10 - Give to Graphic-LEATHER",
          type: "G",
          station_id: 64,
          section_id: 21,
          section_name: "Production Graphic Dept",
          earliest_order_date: "2018-10-19",
          earliest_scan_date: "2018-10-19",
          order_1: 0,
          order_2: 0,
          order_3: 1,
          scan_1: 0,
          scan_2: 0,
          scan_3: 1,
        },
        {
          items_count: "14",
          lines_count: 8,
          station_name: "S-GGR",
          station_description: "SUB - 10 - Give to Make Graphics",
          type: "G",
          station_id: 89,
          section_id: 21,
          section_name: "Production Graphic Dept",
          earliest_order_date: "2017-12-19",
          earliest_scan_date: "2017-12-19",
          order_1: 0,
          order_2: 0,
          order_3: 8,
          scan_1: 0,
          scan_2: 0,
          scan_3: 8,
        },
        {
          items_count: "3",
          lines_count: 2,
          station_name: "S-GRPH",
          station_description: "SUB - 20 - Graphic DONE",
          type: "G",
          station_id: 92,
          section_id: 21,
          section_name: "Production Graphic Dept",
          earliest_order_date: "2018-12-21",
          earliest_scan_date: "2019-01-11",
          order_1: 0,
          order_2: 0,
          order_3: 2,
          scan_1: 0,
          scan_2: 0,
          scan_3: 2,
        },
        {
          items_count: "5",
          lines_count: 5,
          station_name: "S-GRP",
          station_description: "SUB - 30 - Sent To Printer - 1",
          type: "G",
          station_id: 91,
          section_id: 21,
          section_name: "Production Graphic Dept",
          earliest_order_date: "2017-11-01",
          earliest_scan_date: "2017-11-01",
          order_1: 0,
          order_2: 0,
          order_3: 5,
          scan_1: 0,
          scan_2: 0,
          scan_3: 5,
        },
        {
          items_count: "1",
          lines_count: 1,
          station_name: "R-GRD2",
          station_description: "Red - 20 - GRAPHICS DONE - LASER",
          type: "G",
          station_id: 169,
          section_id: 5,
          section_name: "Red Laser",
          earliest_order_date: "2017-08-23",
          earliest_scan_date: "2017-08-31",
          order_1: 0,
          order_2: 0,
          order_3: 1,
          scan_1: 0,
          scan_2: 0,
          scan_3: 1,
        },
      ],
      rejects: [],
      unbatched: null,
      now: "June 13, 2023, 5:56 pm",
      section: "start",
      graphic_statuses: {
        1: "Re-Print Graphic - No Change",
        2: "Re-Work Graphic - Changes Required",
        4: "Customer Service Issue",
        5: "Customer Service Solved",
        7: "Redo Item",
      },
    },
    total: {},

    params: {},
    allData: [],

    active: "summary",
    route: {},

    stationOptions: [],
    nestingOption: [
      { label: "Yes", value: "1" },
      { label: "No", value: "0" },
    ],
    templateOptions: [],
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.data = action.payload;
      })
      .addCase(getRoute.fulfilled, (state, action) => {
        state.route = action.payload;
      })
      .addCase(getStationOption.fulfilled, (state, action) => {
        state.stationOptions = action.payload;
      })
      .addCase(getTemplateOption.fulfilled, (state, action) => {
        state.templateOptions = action.payload;
      });
  },
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
  },
});
export const { setActive } = createGraphicsSlice.actions;
export default createGraphicsSlice.reducer;
