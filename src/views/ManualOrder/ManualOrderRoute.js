// ** React Imports
import { lazy } from "react";

const ManualOrderAdd = lazy(() => import("./add"));

const ManualOrderRoute = [
  {
    element: <ManualOrderAdd />,
    path: "/manual-orders-add",
  },
];

export default ManualOrderRoute;
