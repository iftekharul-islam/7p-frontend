// ** React Imports
import { lazy } from "react";

const OrderList = lazy(() => import("./list"));
const InventoryAdd = lazy(() => import("./add"));
const InventoryEdit = lazy(() => import("./edit"));

const OrderRoute = [
  {
    element: <OrderList />,
    path: "/customer-order",
  },
  {
    element: <InventoryAdd />,
    path: "/inventory-add",
  },
  {
    element: <InventoryEdit />,
    path: "/inventory-edit/:id",
  }
];

export default OrderRoute;
