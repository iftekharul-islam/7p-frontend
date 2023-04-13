// ** React Imports
import { lazy } from "react";

const OrderList = lazy(() => import("./list"));
const OrderAdd = lazy(() => import("./add"));
const OrderEdit = lazy(() => import("./edit"));
const OrderView = lazy(() => import("./show"));
const OrderReceive = lazy(() => import("./receive"));

const PurchaseOrderRoute = [
  {
    element: <OrderList />,
    path: "/purchase-order",
  },
  {
    element: <OrderAdd />,
    path: "/purchase-order-add",
  },
  {
    element: <OrderEdit />,
    path: "/purchase-order-edit/:id",
  },
  {
    element: <OrderView />,
    path: "/purchase-order-view/:id",
  },
  {
    element: <OrderReceive />,
    path: "/purchase-order-receive/:id",
  },
];

export default PurchaseOrderRoute;
