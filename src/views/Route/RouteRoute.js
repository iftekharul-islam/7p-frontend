// ** React Imports
import { lazy } from "react";

const RouteList = lazy(() => import("./list"));
const RouteAdd = lazy(() => import("./add"));
const RouteEdit = lazy(() => import("./edit"));

const RouteRoute = [
  {
    element: <RouteList />,
    path: "/route",
  },
  {
    element: <RouteAdd />,
    path: "/route-add",
  },
  {
    element: <RouteEdit />,
    path: "/route-edit/:id",
  }
];

export default RouteRoute;
