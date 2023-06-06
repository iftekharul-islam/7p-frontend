// ** React Imports
import { lazy } from "react";

const List = lazy(() => import("./list"));
const Show = lazy(() => import("./show"));

const BackOrdersRoute = [
  {
    element: <List />,
    path: "/back-orders",
  },
  {
    element: <Show />,
    path: "/back-orders/show",
  },
];

export default BackOrdersRoute;
