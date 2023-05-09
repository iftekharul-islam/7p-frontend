// ** React Imports
import { lazy } from "react";

const ItemsList = lazy(() => import("./list"));

const OrderItemsReportRoute = [
  {
    element: <ItemsList />,
    path: "/report-order-items",
  }
];

export default OrderItemsReportRoute;
