// ** React Imports
import { lazy } from "react";

const OrderList = lazy(() => import("./list"));
const OrderEdit = lazy(() => import("./edit"));

const OrderRoute = [
  {
    element: <OrderList />,
    path: "/customer-order",
  },
  {
    element: <OrderEdit />,
    path: "/customer-order-edit/:id",
  },
];

export default OrderRoute;
