// ** React Imports
import { lazy } from "react";

const OrderList = lazy(() => import("./list"));
// const InventoryAdd = lazy(() => import("./add"));
// const InventoryEdit = lazy(() => import("./edit"));

const OrderRoute = [
  {
    element: <OrderList />,
    path: "/customer-order",
  },
  // {
  //   element: <InventoryAdd />,
  //   path: "/customer-order-add",
  // },
  // {
  //   element: <InventoryEdit />,
  //   path: "/customer-order-edit/:id",
  // }
];

export default OrderRoute;
