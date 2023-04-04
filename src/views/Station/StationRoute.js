// ** React Imports
import { lazy } from "react";
import { Navigate } from "react-router-dom";

const StationList = lazy(() => import("./list"));
const StationAdd = lazy(() => import("./add"));
const StationEdit = lazy(() => import("./edit"));

const StationRoute = [
  {
    element: <StationList />,
    path: "/station",
  },
  {
    element: <StationAdd />,
    path: "/station-add",
  },
  {
    element: <StationEdit />,
    path: "/station-edit/:id",
  }
];

export default StationRoute;
