// ** React Imports
import { lazy } from "react";

const RouteList = lazy(() => import("./list"));

const CustomerServiceRoute = [
  {
    element: <RouteList />,
    path: "/customer-service",
  },
];

export default CustomerServiceRoute;
