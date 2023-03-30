// ** React Imports
import { lazy } from "react";

const OrderList = lazy(() => import("./list"));
const OrderAdd = lazy(() => import("./add"));
const OrderEdit = lazy(() => import("./edit"));
const OrderView = lazy(() => import("./show"));
const OrderReceive = lazy(() => import("./receive"));

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
    element: <OrderEdit />,
    path: "/order-edit/:id",
  },
  {
    element: <OrderView />,
    path: "/order-view/:id",
  },
  {
    element: <OrderReceive />,
    path: "/order-receive/:id",
  },
];

export default VendorRoute;
