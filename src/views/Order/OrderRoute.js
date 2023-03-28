// ** React Imports
import { lazy } from "react";

const OrderList = lazy(() => import("./list"));
const OrderAdd = lazy(() => import("./add"));
const VendorEdit = lazy(() => import("./edit"));
const VendorView = lazy(() => import("./show"));

const VendorRoute = [
  {
    element: <OrderList />,
    path: "/order",
  },
  {
    element: <OrderAdd />,
    path: "/order-add",
  },
  {
    element: <VendorEdit />,
    path: "/vendor-edit/:id",
  },
  {
    element: <VendorView />,
    path: "/vendor-view/:id",
  },
];

export default VendorRoute;
